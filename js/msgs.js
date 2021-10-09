let MSG_SCHEMA = {};
MSG_SCHEMA['telegram'] = 'tg://msg_url?text=<msg>';
MSG_SCHEMA['viber'] = 'viber://forward?text=<msg>';
MSG_SCHEMA['twitter'] = 'twitter://post?message=<msg>';
MSG_SCHEMA['whatsapp'] = 'whatsapp://send?text=<msg>';
MSG_SCHEMA['sms'] = 'sms:?body=<msg>';
MSG_SCHEMA['email'] = 'mailto:?subject=encya-msg&body=<msg>';

function postMessage(messanger, message) {
let schema = MSG_SCHEMA[messanger.toLowerCase()];
if (schema) {window.location.href = schema.replace('<msg>', encodeURIComponent(message));}
else {alert("Unsupported! Work in progress!");}
}