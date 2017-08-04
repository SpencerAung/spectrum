// @flow
const debug = require('debug')('hermes');
import startSendNewMessageEmailWorker from './queues/send-new-message-email';
import startSendNewThreadEmailWorker from './queues/send-new-thread-email';
import startSendCommunityInviteEmailWorker from './queues/send-community-invite-email';
import startSendUserWelcomeEmailWorker from './queues/send-user-welcome-email';
import startSendNewCommunityWelcomeEmailWorker from './queues/send-new-community-welcome-email';
import startSendCommunityInvoiceReceiptEmailWorker from './queues/send-community-invoice-receipt-email';

console.log('\n✉️ Hermes, the email worker, is starting...');
debug('Logging with debug enabled!');
console.log('');

startSendNewMessageEmailWorker();
startSendNewThreadEmailWorker();
startSendCommunityInviteEmailWorker();
startSendUserWelcomeEmailWorker();
startSendNewCommunityWelcomeEmailWorker();
startSendCommunityInvoiceReceiptEmailWorker();

console.log(
  `\n🗄 Queues open for business ${(process.env.NODE_ENV === 'production' &&
    `at ${process.env.COMPOSE_REDIS_URL}:${process.env.COMPOSE_REDIS_PORT}`) ||
    'locally'}`
);