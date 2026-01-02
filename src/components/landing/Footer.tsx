import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 pb-32 md:pb-24 bg-background border-t border-border/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Produto Digital</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Checkout Seguro</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Aviso importante:</strong> Este é um conteúdo educacional e espiritual de desenvolvimento pessoal. 
              Resultados variam de pessoa para pessoa. Este material não substitui orientação médica, 
              psicológica ou qualquer tratamento profissional de saúde. Não interrompa tratamentos em andamento.
            </p>
          </div>
          
          <Separator className="bg-border/50" />
          
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Dialog>
              <DialogTrigger className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-playfair">Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Esta Política de Privacidade descreve como suas informações pessoais são coletadas, 
                    usadas e compartilhadas quando você visita ou faz uma compra em nosso site.
                  </p>
                  <h4 className="font-semibold text-foreground">Informações Coletadas</h4>
                  <p>
                    Coletamos informações que você nos fornece diretamente, como nome e e-mail 
                    para entrega do produto digital. O processamento do pagamento é feito através 
                    de plataforma de terceiros (Hotmart).
                  </p>
                  <h4 className="font-semibold text-foreground">Uso das Informações</h4>
                  <p>
                    Usamos as informações para processar seu pedido, comunicar sobre sua compra 
                    e fornecer acesso ao conteúdo adquirido.
                  </p>
                  <p className="italic">
                    [PLACEHOLDER: Adicione aqui os termos completos da sua política de privacidade]
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-playfair">Termos de Uso</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Ao acessar e usar este site, você concorda com estes Termos de Uso.
                  </p>
                  <h4 className="font-semibold text-foreground">Produto Digital</h4>
                  <p>
                    O produto oferecido é 100% digital. Após a confirmação do pagamento, 
                    você receberá acesso ao conteúdo através das instruções enviadas por e-mail.
                  </p>
                  <h4 className="font-semibold text-foreground">Uso do Conteúdo</h4>
                  <p>
                    O conteúdo é para uso pessoal e não deve ser compartilhado, revendido 
                    ou distribuído sem autorização.
                  </p>
                  <h4 className="font-semibold text-foreground">Isenção de Responsabilidade</h4>
                  <p>
                    Este material é de caráter educacional e espiritual. Não fazemos promessas 
                    de resultados específicos. Não substitui acompanhamento profissional de saúde.
                  </p>
                  <p className="italic">
                    [PLACEHOLDER: Adicione aqui os termos completos de uso]
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Guia de Códigos de Grabovoi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
