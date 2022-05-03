import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "../WidgetForm";


export const Widget = () => {


    //fazer acessibilidade automático
    //nao precisa nem do isOpen
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8  flex flex-col items-end">

            <Popover.Panel><WidgetForm /></Popover.Panel>

            <Popover.Button
                className="
                    bg-brand-500 
                    rounded-full 
                    px-3 
                    h-12 
                    flex 
                    items-center 
                    group text-white
            ">
                <ChatTeardropDots className="w-6 h-6 " />

                <span
                    className="
                        max-w-0 
                        overflow-hidden 
                        group-hover:max-w-xs 
                        transition-all duration-500 ease-linear
                
                ">
                    <span className="pl-2"></span>
                    FeedBack
                </span>
            </Popover.Button>
        </Popover>
    );
}