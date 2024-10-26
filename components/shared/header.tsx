import { cn } from "@/lib/utils";
import Container from "./container";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export default function Page({ className }: Props) {
  return (
    <header className={cn(className)}>
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl uppercase font-black">Chocolate</h1>
            <p className="text-sm text-gray-400 leading-3">Dark abyss</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button>Log in</Button>

          <Button className="group">
            0
            <div className="relative h-full flex items-center">
              <ShoppingCart className="group-hover:opacity-0 duration-200" />
              <ArrowRight className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200" />
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
}
