import React from "react";
import skills from "@/data/skills.json";
import { FaCode, FaQuestionCircle, FaServer, FaTools } from "react-icons/fa";
import { Card } from "flowbite-react";
import * as motion from "motion/react-client";

const categoryIcons = {
  "front-end-technologies": FaCode,
  "back-end-technologies": FaServer,
  "tools-and-others": FaTools,
  default: FaQuestionCircle,
};

// Componente para exibir as tecnologias de Frontend
function FrontEndTech({ item }) {
  return (
    <ul className="text-muted-foreground space-y-2">
      <li key={item.id}>
        <h2>{item.name}</h2>
      </li>
    </ul>
  );
}

// Componente para exibir as tecnologias de Backend
function BackEndTech({ item }) {
  return (
    <ul className="text-muted-foreground space-y-2">
      <li key={item.id}>
        <h2>{item.name}</h2>
      </li>
    </ul>
  );
}

// Componente para exibir as ferramentas
function ToolsAndOthersTech({ item }) {
  return (
    <ul className="text-muted-foreground space-y-2">
      <li key={item.id}>
        <h2>{item.name}</h2>
      </li>
    </ul>
  );
}

export default function Technologies({ categories, titleTech }) {
  // Acessa os dados da categoria específica do JSON
  const IconComponent = categoryIcons[categories] || categoryIcons.default;
  const itemsTech = skills[categories];

  if (!itemsTech) {
    return <div className="text-white"> Categoria não localizada!</div>;
  }

  return (
    <>
      <motion.div
        className="max-sm:h-3/4 w-full max-w-sm"
        whileHover={{ scale: 1.1 }}
      >
        <Card className="bg-gray-900/70 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)] border-none">
          <IconComponent className="h-8 w-8 text-white" />
          {/* Aqui o ícone é renderizado */}
          <h3 className="text-xl text-white font-semibold mb-2">{titleTech}</h3>
          {itemsTech.map((item) => {
            // Condicionalmente renderiza o componente correto para cada tipo de item
            switch (categories) {
              case "front-end-technologies":
                return <FrontEndTech key={item.id} item={item} />;
              case "back-end-technologies":
                return <BackEndTech key={item.id} item={item} />;
              case "tools-and-others":
                return <ToolsAndOthersTech key={item.id} item={item} />;
              default:
                return (
                  <div key={item.id}>Tipo de tecnologia desconhecida.</div>
                );
            }
          })}
        </Card>
      </motion.div>
    </>
  );
}
