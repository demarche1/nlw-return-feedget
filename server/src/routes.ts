import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma.feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const router = express.Router();

router.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodeMailerAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerAdapter
  );

  submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  res.status(201).send();
});
