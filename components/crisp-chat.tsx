"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f57cb6b2-c287-4349-ae83-e3c353866272");
  }, []);

  return null;
};
