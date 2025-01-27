import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app: App;

if (getApps().length === 0) {
  // Get the Base64-encoded service account key from the environment variable
  const serviceKeyBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_BASE64;

  if (!serviceKeyBase64) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY_BASE64 is not defined in the environment variables."
    );
  }

  const serviceKey = JSON.parse(
    Buffer.from(serviceKeyBase64, "base64").toString("utf8")
  );

  console.log("FIREBASE_SERVICE_ACCOUNT_KEY", JSON.stringify(serviceKey));
  // Decode the Base64 string back into the JSON object
  // const serviceKey = JSON.parse(
  //   Buffer.from(serviceKeyBase64, "base64").toString("utf8")
  // );

  // Initialize Firebase Admin SDK
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp(); // Reuse the existing app if already initialized
}

// Initialize Firestore
const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
