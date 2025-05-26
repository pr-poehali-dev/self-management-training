import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
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
      description:
        "Анализ потребностей общества и роль личности в их реализации",
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
      description:
        "Конкретные инструменты и методы для повседневного применения",
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

  const principles = [
    {
      title: "Целеустремленность",
      items: [
        "Четкое определение целей",
        "Конкретные измеримые задачи",
        "План достижения",
        "Регулярные напоминания",
      ],
    },
    {
      title: "Планирование",
      items: [
        "Долгосрочные стратегии",
        "Краткосрочные планы",
        "Разбивка на этапы",
        "Организация ресурсов",
      ],
    },
    {
      title: "Приоритизация",
      items: [
        "Определение важных задач",
        "Фокус на ключевом",
        "Срочное vs важное",
        "Распределение сил",
      ],
    },
  ];

  const expectedResults = [
    "Повышение продуктивности на 30-50%",
    "Улучшение качества решений",
    "Снижение уровня стресса",
    "Достижение поставленных целей",
    "Развитие новых навыков",
    "Улучшение отношений",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 font-montserrat">
            Самоуправление как способ раскрытия потенциала
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Комплексная программа развития навыков самоуправления для
            эффективной реализации в обществе
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Clock" size={16} className="mr-2" />8 модулей
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Users" size={16} className="mr-2" />
              Индивидуальная работа
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Target" size={16} className="mr-2" />
              Практический результат
            </Badge>
          </div>
          <Button
            size="lg"
            className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать обучение
          </Button>
        </div>
      </section>

      {/* Modules Grid */}
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

      {/* Principles Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            Фундаментальные принципы
          </h2>
          <Tabs defaultValue="goals" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="goals">Целеустремленность</TabsTrigger>
              <TabsTrigger value="planning">Планирование</TabsTrigger>
              <TabsTrigger value="priorities">Приоритизация</TabsTrigger>
            </TabsList>

            {principles.map((principle, index) => (
              <TabsContent
                key={index}
                value={["goals", "planning", "priorities"][index]}
                className="mt-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="Target"
                        size={24}
                        className="mr-3 text-violet-600"
                      />
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {principle.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <Icon
                            name="ArrowRight"
                            size={16}
                            className="mr-3 mt-1 text-violet-500"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 font-montserrat">
            Ожидаемые результаты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expectedResults.map((result, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="text-violet-600"
                    />
                  </div>
                  <p className="font-medium">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Скачать программу курса
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            Готовы начать трансформацию?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к программе и откройте свой потенциал для реализации
            в обществе
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Записаться на курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
