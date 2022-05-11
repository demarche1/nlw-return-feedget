import { MailAdapter } from "../adapters/mail-adpter";
import { FeedbackRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCasesRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailerAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCasesRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailerAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        "<div>",
        `<p>Tipo do feedback ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        "</div>",
      ].join("\n"),
    });
  }
}
