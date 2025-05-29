// components/MobileMenuSheet.tsx
"use client"; // Si estás usando Next.js con App Router

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenuOutline } from "react-icons/io5";

export function MobileMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex flex-col items-center gap-1">
          <IoMenuOutline size={24} />
          <span className="text-xs">Menú</span>
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-gray-900 text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Menú</SheetTitle>
          <SheetDescription className="text-gray-400">
            Opciones de navegación
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col space-y-4 mt-6">
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
            >
              Perfil
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
            >
              Configuración
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
            >
              Favoritos
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
