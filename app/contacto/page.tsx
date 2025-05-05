import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sellersData } from "@/data/sellers"
import { businessData } from "@/data/business"

export default function ContactoPage() {
  const socialNetworks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="h-6 w-6" />,
      color: "bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="h-6 w-6" />,
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin className="h-6 w-6" />,
      color: "bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: <Youtube className="h-6 w-6" />,
      color: "bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctanos</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No dudes en ponerte en contacto con alguno de nuestros vendedores.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.870198191014!2d-107.3776743452427!3d24.81367953067675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd756929e435b%3A0x1d99b8adace81e6!2sBlvrd%20Dr%20Mora%201218%2C%20Las%20Quintas%2C%2080060%20Culiac%C3%A1n%20Rosales%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1746401483776!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0, aspectRatio: "16/9" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la empresa"
                  ></iframe>
                 </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {/* <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <a href="mailto:info@miempresa.com" className="text-primary hover:underline transition-all">
                      info@miempresa.com
                    </a>
                  </div>
                </CardContent>
              </Card> */}
              {sellersData.map((seller) => (
                <Card key={seller.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Telefono {seller.name} Provedeco</h3>
                      <a href={`tel:${seller.number}`} className="text-primary hover:underline transition-all">
                        {seller.number}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Dirección</h3>
                    <p>{businessData.address}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Horario</h3>
                    <p>Lun - Vie: 9:00 - 18:00</p>
                    <p>Sáb: 10:00 - 14:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Síguenos</h2>
                    <p className="text-muted-foreground">
                      Mantente al día con nuestras últimas novedades y ofertas siguiéndonos en redes sociales.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {sellersData.map((seller) => (
                      <a
                        key={seller.name}
                        href={seller.facebookPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-300 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white `}
                      >
                       {/*  {social.icon} */}
                       <Facebook className="h-6 w-6" />
                        <span className="mt-2 text-sm font-medium">{seller.name} Provedeco</span>
                      </a>
                    ))}
                  </div>

                {/*   <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-xl font-bold text-center">¿Prefieres enviarnos un mensaje directo?</h3>
                    <div className="flex justify-center">
                      <Button size="lg" className="w-full sm:w-auto">
                        <Mail className="mr-2 h-4 w-4" />
                        Enviar Email
                      </Button>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>

           {/*  <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
                    <p className="text-muted-foreground">
                      Respuestas a las preguntas más comunes de nuestros clientes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">¿Cuál es el tiempo de entrega?</h3>
                      <p className="text-sm text-muted-foreground">
                        Nuestro tiempo de entrega estándar es de 3-5 días hábiles, dependiendo de tu ubicación.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">¿Cómo puedo realizar un seguimiento de mi pedido?</h3>
                      <p className="text-sm text-muted-foreground">
                        Recibirás un correo electrónico con un número de seguimiento una vez que tu pedido haya sido
                        enviado.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">¿Cuál es la política de devoluciones?</h3>
                      <p className="text-sm text-muted-foreground">
                        Aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en
                        su estado original.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <a href="#" className="text-primary hover:underline inline-flex items-center">
                      Ver todas las preguntas frecuentes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}
