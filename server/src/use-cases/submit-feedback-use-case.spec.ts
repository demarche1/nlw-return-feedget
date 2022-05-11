import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Ta bugado isso ae",
        screenshot: "data:image/png;base64,tantofaz649846",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
  });

  it("Should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "Ta bugado isso ae",
        screenshot: "data:image/png;base64,tantofaz649846",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,tantofaz649846",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit a feedback invalid screenshot string", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Ta bugado isso ae",
        screenshot: "tantofaz.jpg",
      })
    ).rejects.toThrow();
  });
});
