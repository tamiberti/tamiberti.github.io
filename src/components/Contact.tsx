import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-background.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const Contact = () => {
  return <section id="contact" className="py-24 md:py-32 px-6 animate-slide-up bg-cover bg-center bg-no-repeat min-h-screen flex items-center" style={{
    backgroundImage: `url(${contactBg})`
  }}>
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-12 md:space-y-16 text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-playfair font-normal text-foreground my-0 py-0">
            Entre em contato
          </h2>

          {/* Simple Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="font-light text-foreground text-base md:text-lg flex items-center justify-center gap-3">
                <EmailIcon className="w-5 h-5" /> tamisberti@gmail.com.br
              </p>
              <p className="font-light text-foreground text-base md:text-lg flex items-center justify-center gap-3">
                <WhatsAppIcon className="w-5 h-5" /> (51) 99218-8634
              </p>
            </div>
          </div>

          {/* CVV Section */}
          <div className="mt-16 pt-12 border-t border-border/30 space-y-6">
            <h3 className="text-xl md:text-2xl font-playfair font-normal text-foreground">
              Precisa de atendimento urgente?
            </h3>
            <p className="text-muted-foreground font-light text-sm md:text-base max-w-xl mx-auto">
              O Centro de Valorização da Vida oferece apoio emocional e atua na prevenção do suicídio por meio de um atendimento voluntário e acolhedor. Para conversar, clique no botão abaixo.
            </p>
            <Button onClick={() => window.open('https://cvv.org.br/chat/', '_blank')} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-light">
              Chat CVV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Fixed CTA Button - Alice Abadi style */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => window.open('https://wa.me/5551992188634', '_blank')} className="px-8 py-4 h-auto text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium text-white bg-[#25D366] hover:bg-[#1ebe57]">
          Entre em contato
          <WhatsAppIcon className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>;
};
export default Contact;