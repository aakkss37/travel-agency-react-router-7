import {Link, useLocation} from "react-router";
import pkg_base from '@syncfusion/ej2-base';
let {IntlBase} = pkg_base;
const { getActualDateTimeFormat } = IntlBase;
import pkg_react_button from '@syncfusion/ej2-react-buttons';
const {ButtonComponent} = pkg_react_button;
import { cn } from "lib/utils";

interface Props {
    title: string;
    description: string;
    ctaText?: string;
    ctaUrl?: string;
}

const Header = ({ title, description, ctaText, ctaUrl }: Props) => {
    const location = useLocation();
    return (
        <header className="header">
            <article>
                <h1 className={cn("text-dark-100",  location.pathname === '/' ? 'text-2xl md:text-4xl font-bold': 'text-xl md:text-2xl font-semibold')}>{title}</h1>
                <p className={cn("text-gray-100 font-normal",  location.pathname === '/' ? 'text-base md:text-lg': 'text-sm md:text-lg')}>{description}</p>
            </article>

            {ctaText && ctaUrl && (
                <Link to={ctaUrl}>
                    <ButtonComponent type="button" className="button-class w-full md:w-[200px] h-[50px] bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center gap-2">
                        <img src="/assets/icons/plus.svg" alt="plus" className="size-5" />
                        <span className="p-16-semibold text-white">{ctaText}</span>
                    </ButtonComponent>
                </Link>
            )}
        </header>
    )
}
export default Header