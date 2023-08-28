import { config } from 'firebase-functions';
import * as admin from 'firebase-admin';

// Init Firebase Upload
const conf = config().firebase;
admin.initializeApp(conf);

export * from './app/bot/whatsapp-channel/whatsapp-receive-incoming-message.function';
export * from './app/bot/whatsapp-channel/whatsapp-upload-media.function';

export * from './app/bot/main/send-outgoing-message.function';
export * from './app/bot/main/talk-to-human.function';
export * from './app/bot/main/move-chat.function';

export * from './app/analytics/fns-measure-group-progress';
export * from './app/analytics//get-metabase-url.function';
export * from './app/bot/messenger/messenger-receive-message.function';

export * from './app/micro-apps/cmi5/fetch-token.function';
export * from './app/micro-apps/cmi5/cmi-listener.function';