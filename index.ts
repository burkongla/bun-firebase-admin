import { Elysia } from "elysia";
import { firestore } from "./firebase";

const app = new Elysia();

app.listen(3000);

app.get("/test", async () => {
  await firestore.collection("test").doc("test").get();
  return Response.json({ ok: "OK" });
});
