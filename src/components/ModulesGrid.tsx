import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  status: "available" | "locked";
}

const modules: Module[] = [
  {
    id: 1,
    title: "Основы самоуправления",
    description:
      "Базовые концепции, принципы и психологические основы самоорганизации",
    duration: "2-3 недели",
    topics: [
      "Принципы самоуправления",
      "История концепции",
      "Диагностика уровня",
    ],
    status: "available",
  },
  {
    id: 2,
    title: "Личностный потенциал",
    description: "Исследование и развитие внутренних ресурсов личности",
    duration: "2-3 недели",
    topics: [
      "Компоненты потенциала",
      "Эмоциональный интеллект",
      "Управление энергией",
    ],
    status: "available",
  },
  {
    id: 3,
    title: "Социальные потребности",
    description: "Анализ потребностей общества и роль личности в их реализации",
    duration: "2-3 недели",
    topics: [
      "Анализ потребностей",
      "Социальное проектирование",
      "Командное взаимодействие",
    ],
    status: "locked",
  },
  {
    id: 4,
    title: "Практическое самоуправление",
    description: "Конкретные инструменты и методы для повседневного применения",
    duration: "2-3 недели",
    topics: ["Постановка целей", "Тайм-менеджмент", "Управление стрессом"],
    status: "locked",
  },
  {
    id: 5,
    title: "Социальная реализация",
    description: "Практическая реализация через общественную деятельность",
    duration: "2-3 недели",
    topics: ["Социальное предпринимательство", "Волонтерство", "Лидерство"],
    status: "locked",
  },
  {
    id: 6,
    title: "Развитие компетенций",
    description: "Ключевые навыки для эффективного самоуправления",
    duration: "2-3 недели",
    topics: [
      "Критическое мышление",
      "Креативное решение проблем",
      "Публичные выступления",
    ],
    status: "locked",
  },
  {
    id: 7,
    title: "Практикум",
    description: "Разработка и реализация собственных проектов",
    duration: "2-3 недели",
    topics: ["Персональный план", "Социальный проект", "Защита проектов"],
    status: "locked",
  },
  {
    id: 8,
    title: "Мониторинг и развитие",
    description: "Оценка эффективности и планирование дальнейшего роста",
    duration: "2-3 недели",
    topics: [
      "Оценка эффективности",
      "Корректировка планов",
      "Долгосрочное развитие",
    ],
    status: "locked",
  },
];

const ModulesGrid = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
          Программа курса
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <Card
              key={module.id}
              className={`transition-all hover:shadow-lg hover:-translate-y-1 ${
                module.status === "locked" ? "opacity-60" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={
                      module.status === "available" ? "default" : "secondary"
                    }
                  >
                    Модуль {module.id}
                  </Badge>
                  <Icon
                    name={module.status === "available" ? "Unlock" : "Lock"}
                    size={16}
                    className={
                      module.status === "available"
                        ? "text-green-500"
                        : "text-gray-400"
                    }
                  />
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Clock" size={14} className="mr-2" />
                    {module.duration}
                  </div>
                  <div className="space-y-1">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <Icon
                          name="CheckCircle2"
                          size={12}
                          className="mr-2 mt-1 text-violet-500"
                        />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant={
                      module.status === "available" ? "default" : "secondary"
                    }
                    className="w-full mt-4"
                    disabled={module.status === "locked"}
                  >
                    {module.status === "available"
                      ? "Изучить"
                      : "Заблокировано"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
