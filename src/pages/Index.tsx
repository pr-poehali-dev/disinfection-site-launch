import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 1,
    title: 'Дезинфекция помещений',
    description: 'Комплексная обработка офисов, складов, торговых площадей современными препаратами',
    icon: 'Building2',
    features: ['Холодный туман', 'Безопасные препараты', 'Сертификаты качества']
  },
  {
    id: 2,
    title: 'Дезинсекция',
    description: 'Профессиональное уничтожение насекомых с гарантией результата',
    icon: 'Bug',
    features: ['Все виды насекомых', 'Гарантия 12 месяцев', 'Экологично']
  },
  {
    id: 3,
    title: 'Дератизация',
    description: 'Эффективная борьба с грызунами в жилых и промышленных объектах',
    icon: 'Shield',
    features: ['Комплексный подход', 'Профилактика', 'Безопасность']
  },
  {
    id: 4,
    title: 'Санитарная обработка транспорта',
    description: 'Дезинфекция автомобилей, автобусов, спецтехники',
    icon: 'Truck',
    features: ['Все типы транспорта', 'Быстрая обработка', 'Без запаха']
  },
  {
    id: 5,
    title: 'Обработка медицинских учреждений',
    description: 'Специализированная дезинфекция клиник, больниц по стандартам СанПиН',
    icon: 'HeartPulse',
    features: ['Медицинские стандарты', 'Опытный персонал', 'Документация']
  },
  {
    id: 6,
    title: 'Дезинфекция пищевых производств',
    description: 'Обработка кухонь, столовых, ресторанов с соблюдением HACCP',
    icon: 'Utensils',
    features: ['HACCP стандарты', 'Регулярное обслуживание', 'Контроль качества']
  }
];

const benefits = [
  { icon: 'Award', title: 'Лицензии и сертификаты', description: 'Все необходимые разрешения и документы' },
  { icon: 'Clock', title: 'Работаем 24/7', description: 'Выезд в любое удобное время' },
  { icon: 'CheckCircle2', title: 'Гарантия качества', description: 'Договор с гарантийными обязательствами' },
  { icon: 'Users', title: 'Опыт 15+ лет', description: 'Более 5000 обработанных объектов' }
];

const faqItems = [
  {
    question: 'Безопасны ли используемые препараты?',
    answer: 'Да, мы используем только сертифицированные препараты 4 класса опасности (малоопасные). Они безопасны для людей и животных после проветривания.'
  },
  {
    question: 'Как долго длится обработка?',
    answer: 'Время обработки зависит от площади помещения. В среднем: квартира 1-2 часа, офис до 100 м² - 2-3 часа, крупные объекты обсуждается индивидуально.'
  },
  {
    question: 'Нужна ли подготовка помещения?',
    answer: 'Да, необходимо убрать продукты питания, посуду, средства гигиены. Мебель не нужно накрывать. Подробную инструкцию предоставим при заключении договора.'
  },
  {
    question: 'Какая гарантия на услуги?',
    answer: 'Мы предоставляем гарантию от 3 до 12 месяцев в зависимости от вида услуги. При повторном появлении проблемы проводим бесплатную обработку.'
  },
  {
    question: 'Предоставляете ли документы после обработки?',
    answer: 'Да, после обработки выдаем акт выполненных работ, копии сертификатов на препараты и рекомендации по профилактике.'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">СанитПро</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-sm text-muted-foreground">Звоните прямо сейчас</span>
                <a href="tel:+78001234567" className="text-lg font-semibold text-primary">+7 (800) 123-45-67</a>
              </div>
              <Button size="lg" className="hidden md:inline-flex">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white text-sm px-4 py-1">
                Работаем с 2009 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональная дезинфекция
                <span className="text-primary"> с гарантией</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Защитите свой дом или бизнес от вирусов, бактерий и вредителей. Сертифицированные препараты и опытные специалисты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={24} />
                  <span className="font-semibold">Выезд в день обращения</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-accent" size={24} />
                  <span className="font-semibold">Гарантия до 12 месяцев</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ddb06495-e102-419d-80f8-6770f6e0101b/files/9a5308fc-1600-4e79-b2ab-3246b6751673.jpg"
                alt="Профессиональная дезинфекция"
                className="rounded-2xl shadow-2xl w-full animate-scale-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name="Users" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3 hover-scale">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <Icon name={benefit.icon} size={40} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary text-white">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Полный спектр услуг дезинфекции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная обработка помещений любой сложности с применением современного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-white">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Профессионалы с 15-летним опытом</h2>
              <p className="text-lg text-muted-foreground">
                СанитПро — ведущая компания в области дезинфекции и санитарной обработки. Мы работаем с 2009 года и за это время обработали более 5000 объектов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Все лицензии и сертификаты</h3>
                    <p className="text-muted-foreground">Работаем в полном соответствии с требованиями СанПиН и Роспотребнадзора</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Квалифицированная команда</h3>
                    <p className="text-muted-foreground">Все специалисты прошли обучение и имеют допуски к работе с препаратами</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Используем новейшие методы обработки: холодный туман, УМО, барьерная защита</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-white p-6 text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">лет на рынке</div>
              </Card>
              <Card className="bg-accent text-white p-6 text-center">
                <div className="text-5xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">объектов обработано</div>
              </Card>
              <Card className="bg-accent text-white p-6 text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">довольных клиентов</div>
              </Card>
              <Card className="bg-primary text-white p-6 text-center">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">работаем для вас</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary text-white">Сертификаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Лицензии и разрешения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все наши специалисты и препараты имеют необходимые сертификаты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="FileCheck" size={64} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Лицензия Роспотребнадзора</h3>
              <p className="text-muted-foreground">Разрешение на дезинфекционную деятельность</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="ShieldCheck" size={64} className="text-accent mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Сертификаты препаратов</h3>
              <p className="text-muted-foreground">Все средства сертифицированы в РФ</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="Award" size={64} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">ISO 9001</h3>
              <p className="text-muted-foreground">Система менеджмента качества</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/ddb06495-e102-419d-80f8-6770f6e0101b/files/43bd0bba-ff17-4110-8813-7afe82b6ff4b.jpg"
              alt="Сертификаты и лицензии"
              className="rounded-xl shadow-xl max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary text-white">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Получите бесплатную консультацию</h2>
              <p className="text-xl opacity-90">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ваше имя</label>
                    <Input 
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ваш вопрос или адрес объекта</label>
                  <Textarea 
                    placeholder="Опишите ваш запрос или укажите адрес для обработки"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg h-14">
                  Отправить заявку
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} className="text-primary" />
                <span className="text-xl font-bold">СанитПро</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная дезинфекция и санитарная обработка с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Дезинфекция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дезинсекция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дератизация</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+78001234567" className="flex items-center gap-2 text-primary hover:underline">
                  <Icon name="Phone" size={18} />
                  +7 (800) 123-45-67
                </a>
                <a href="mailto:info@sanitpro.ru" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} />
                  info@sanitpro.ru
                </a>
                <div className="flex items-start gap-2 text-gray-400">
                  <Icon name="MapPin" size={18} className="mt-1" />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 СанитПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
