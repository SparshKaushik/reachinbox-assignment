"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../axios";

export type Mail = {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  cc: string;
  bcc: string;
  threadId: number;
  messageId: string;
  inReplyTo: string;
  references: string;
  subject: string;
  body: string;
  isRead: boolean;
  folder: string;
  uid: number;
  sentAt: string;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

type MailResponse = {
  status: number;
  data: Mail[];
};

export const useMail = () =>
  useQuery<MailResponse>({
    queryKey: ["mails"],
    queryFn: async () => {
      const response = await api.get("/onebox/list");
      return response.data as MailResponse;
    },
  });

type MailThreadParams = {
  id?: number;
};

export const useMailThread = (params: MailThreadParams) => {
  const { id } = params;

  return useQuery<MailResponse>({
    queryKey: ["mails", id],
    queryFn: async () => {
      if (!id) return { status: 200, data: [] };
      const response = await api.get(`/onebox/messages/${id}`);
      return response.data as MailResponse;
    },
  });
};

export const useDeleteMailThread = (params: MailThreadParams) => {
  const { id } = params;

  return useMutation({
    mutationFn: async () => {
      if (!id) return { status: 404, data: [] };
      const response = await api.delete(`/onebox/messages/${id}`);
      return response.data as MailResponse;
    },
  });
};
