import Engine from "@serverless-cd/engine";
import path from "path";

const logPrefix = path.join(__dirname, "logs");
const plugin = path.join(__dirname, "..", "src");

test("test", async () => {
  const message = "this is a test message";
  const steps = [
    {
      plugin,
      inputs: {
        message,
        token: "${{ secrets.token }}",
      },
    },
  ];
  const engine = new Engine({
    cwd: __dirname,
    steps,
    logConfig: { logPrefix },
    inputs: {
      secrets: { token: "12345678901234567890" },
    },
  });
  const res = await engine.start();
  expect(res.status).toBe("success");
});
