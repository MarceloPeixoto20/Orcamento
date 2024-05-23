import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x'

export const client = new KindeSDK(
    KINDE_ISSUER_URL="https://testeestacio.kinde.com",
    KINDE_POST_CALLBACK_URL="exp://127.0.0.1:8081",
    KINDE_POST_LOGOUT_REDIRECT_URL="exp://127.0.0.1:8081",
    KINDE_CLIENT_ID="95fc4ba8171a4e4086f80abfd8bbc8bf")