import { DocumentData, DocumentReference } from "firebase-admin/firestore";
import { firestore } from "./index.js";

export const getDocumentRef = (collection: string, id: string) => {
    return firestore.collection(collection).doc(id);
};

export const getNewDocumentRef = (collection: string) => {
    return firestore.collection(collection).doc();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setDocument = (
    ref: DocumentReference<DocumentData>,
    data: any,
    merge?: boolean
) => {
    return ref.set(data, { merge });
};

export const getDocument = (ref: DocumentReference<DocumentData>) => {
    return ref.get();
};
