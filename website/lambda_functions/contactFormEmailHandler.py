import json
import boto3
import logging
from botocore.exceptions import ClientError

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # Log the incoming event
    logger.info(f"Received event: {event}")

    # Extract and log the raw body
    raw_body = event.get('body', '{}')
    logger.info(f"Raw body: {raw_body}")

    # Attempt to parse the JSON body
    try:
        body = json.loads(raw_body)
        logger.info(f"Parsed body: {body}")
    except json.JSONDecodeError as e:
        logger.error(f"JSON parsing error: {e}")
        return generate_response(400, 'Invalid JSON in request body')

    # Check for data presence
    if all(key in body for key in ['name', 'email', 'subject', 'message']):
        name = body['name']
        email = body['email']
        subject = body['subject']
        message = body['message']
    else:
        logger.info("One or more keys are missing in the body")
        name = email = subject = message = 'N/A'

    # Log extracted values
    logger.info(f"Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

    # AWS SES client
    ses_client = boto3.client('ses', region_name='us-east-1')

    try:
        # Send email
        email_content = f"Name: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}"
        response = ses_client.send_email(
            Source="yuanhaiyue2021@gmail.com",
            Destination={'ToAddresses': ["yuanhaiyue2021@gmail.com"]},
            Message={
                'Subject': {'Data': subject},
                'Body': {'Text': {'Data': email_content}}
            }
        )
        logger.info("Email sent successfully")
        return generate_response(200, 'Message sent successfully!')
    except ClientError as e:
        logger.error(f"Error sending email: {e.response['Error']['Message']}")
        return generate_response(500, 'Error sending email')

def generate_response(status_code, body_message):
    """ Helper function to generate a response with CORS headers. """
    return {
        'statusCode': status_code,
        'headers': {
            'Access-Control-Allow-Origin': 'https://hi-yyuan.com',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        'body': json.dumps(body_message)
    }
