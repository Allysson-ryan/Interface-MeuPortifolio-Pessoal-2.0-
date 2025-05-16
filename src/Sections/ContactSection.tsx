import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Utils/Title";
import LinkedinLogo from "../assets/LinkedinLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import { GithubLogo } from "@phosphor-icons/react";
import { Alert } from "@mui/material";

const ACCESS_KEY = import.meta.env.VITE_STATICFORM_ACCESS_KEY;

const ContactSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState<{
    type: "success" | "info" | "warning" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setAlert({
        type: "warning",
        message: "Por favor, preencha todos os campos.",
      });
      return;
    }

    const formDataEncoded = new URLSearchParams({
      name,
      email,
      message,
      replyTo: "@",
      apiKey: ACCESS_KEY || "",
      redirectTo: "", // ← Remover para evitar redirecionamento
    });

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded.toString(),
        redirect: "manual", // ← Bloqueia redirecionamento automático
      });

      const isRedirect = response.status >= 300 && response.status < 400;

      if (response.ok || isRedirect) {
        setAlert({
          type: "success",
          message: "Sua mensagem foi enviada com sucesso! 📬",
        });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => navigate("/agradecimento"), 2000);
      } else {
        setAlert({
          type: "error",
          message: "Erro ao enviar. Verifique o formulário e tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setAlert({
        type: "error",
        message: "Erro ao conectar com o servidor. Tente mais tarde.",
      });
    }
  };

  return (
    <main className="p-8 gap-6">
      <div className="flex items-center justify-center flex-col mt-10 mb-[2rem]">
        <Title className="text-primary">Entre em Contato</Title>

        {/* LINKS */}
        <div className="flex items-center justify-center w-full gap-8 mt-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/allysson-ryan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <img
              src={LinkedinLogo}
              alt="Linkedin"
              className="w-[35px] h-[35px]"
            />
            <h1>Meu Linkedin</h1>
          </a>

          <a
            href="https://github.com/Allysson-ryan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <GithubLogo className="w-[35px] h-[35px] fill-textPrimary" />
            <h1>Meu GitHub</h1>
          </a>

          <a
            href="https://www.instagram.com/ryan.nasciment0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <img
              src={InstagramLogo}
              alt="Instagram"
              className="w-[35px] h-[35px]"
            />
            <h1>Meu Instagram</h1>
          </a>
        </div>

        {/* ALERTA */}
        {alert && (
          <div className="w-full max-w-2xl mt-4 px-4">
            <Alert
              severity={alert.type}
              variant="outlined"
              onClose={() => setAlert(null)}
              sx={{
                backgroundColor: "var(--background)",
                color: "var(--text-fifth)",
                borderColor: "var(--text-fifth)",
                "& .MuiAlert-icon": {
                  color: "var(--text-fifth)",
                },
              }}
            >
              {alert.message}
            </Alert>
          </div>
        )}

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mt-10 space-y-6 px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <textarea
            name="message"
            placeholder="Digite sua mensagem"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white rounded-full px-8 py-3 text-sm hover:bg-gray transition"
            >
              Entrar em contato
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactSection;
