import React, { useState, useEffect, useRef, FC, FormEvent, RefObject, HTMLProps } from 'react';
import { createRoot } from 'react-dom/client';

// ======= HOOKS =======
type IntersectionObserverOptions = {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
}

const useIntersectionObserver = (elementRef: RefObject<Element>, options: IntersectionObserverOptions): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef, options]);

    return isVisible;
};

// ======= ICONS =======
type IconProps = {
    className?: string;
};

const CodeBracketIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
    </svg>
);
const ScaleIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v16.5m-13.5-16.5c-1.01.143-2.01.317-3 .52m-3-.52v16.5" />
    </svg>
);
const BriefcaseIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.92a2.25 2.25 0 0 1-2.25-2.25v-4.07m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.92a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-2.07a2.25 2.25 0 0 0-2.25-2.25H5.92a2.25 2.25 0 0 0-2.25 2.25v2.07" />
    </svg>
);
const ShieldCheckIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.017h-.008v-.017Z" />
    </svg>
);
const BuildingLibraryIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
);
const AcademicCapIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);
const UsersIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
    </svg>
);
const GlobeAltIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 1 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12" />
    </svg>
);
const BanknotesIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v1.5m0 0v.75m0 0v.75m0 0V9m0 0h1.5m1.5 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75m0 0h.75M9.75 6h.75m0 0h.75M9.75 6v1.5m0 0v.75M9.75 6v.75m0 0h.75m0 0h.75m0 0h.75m3.75 0v-.75m0 0v-.75m0 0v-.75m0 0V6m0 0h-.75m0 0h-.75M15 6h-.75m0 0h-.75m0 0h-.75m0 0h-.75m-3.75 0v.75m0 0v.75m0 0v.75m3.75-3v.75m0 0h.75M12.75 9h.75m-1.5 0h.75m0 0h.75m3.75 0h.75m0 0h.75m2.25-3h.75m0 0h.75m0 0h.75M18 9h.75m0 0h.75m0 0h.75m-3-3h.75m0 0h.75m0 0h.75M18 6h.75m0 0h.75M18 6h.75m.75 12.75v-1.5m0 0v-1.5m0 0v-1.5m0 0V9.75m0 0v-1.5m0 0V6.75m0 0v-.75m0 0V5.25m0 0v-.75m0 0V3.75m0 0v-.75A.75.75 0 0 0 18 2.25h-1.5a.75.75 0 0 0-.75.75v.75" />
    </svg>
);
const BookOpenIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);
const EnvelopeIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
const MapPinIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);
const PhoneIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.582-1.35L18.75 15.75a2.25 2.25 0 0 0-2.648.062l-1.12 1.12a1.5 1.5 0 0 1-1.897-.035l-3.35-3.35a1.5 1.5 0 0 1-.035-1.897l1.12-1.12a2.25 2.25 0 0 0 .062-2.648l-3.375-3.375a1.688 1.688 0 0 0-1.35-.581H3.375A2.25 2.25 0 0 0 1.125 4.5v2.25Z" />
    </svg>
);
const FacebookIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a4 4 0 0 0-4 4v2.01h-3l-.396 3.98h3.396v8.01Z" />
    </svg>
);
const WhatsAppIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.976 8.974 0 1.582.413 3.126 1.198 4.488L3 21l4.629-1.224a8.948 8.948 0 0 0 4.424 1.193h.004c4.947 0 8.975-4.027 8.975-8.973 0-2.39-.936-4.634-2.623-6.333Zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.44 7.44 0 0 1-1.141-3.971c0-4.102 3.337-7.44 7.44-7.44a7.425 7.425 0 0 1 5.263 2.182 7.425 7.425 0 0 1 2.183 5.26c-.002 4.103-3.339 7.44-7.442 7.44Zm3.6-5.113c-.207-.102-1.233-.605-1.426-.675s-.336-.102-.477.102c-.14.204-.537.675-.657.817-.12.14-.24.162-.447.059-.207-.102-.873-.319-1.662-.99-.613-.526-1.03-1.176-1.15-1.379s-.122-.306-.011-.41a.582.582 0 0 1 .267-.22c.078-.035.12-.059.18-.1c.06-.04.09-.1.12-.162c.03-.06.014-.117-.006-.159s-.477-1.141-.652-1.562c-.172-.41-.347-.354-.477-.354h-.107c-.13 0-.287.04-.437.204-.15.162-.583.566-.583 1.379s.597 1.599.682 1.721c.084.122 1.178 1.8 2.85 2.513.395.17.702.272.94.348.3.095.58.08.79.05c.243-.035.77-.312.877-.613s.107-.558.077-.613c-.03-.059-.107-.1-.214-.204Z" clipRule="evenodd" />
    </svg>
);
const GavelIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.083c.428-.428.428-1.125 0-1.553a1.1 1.1 0 0 0-1.553 0l-1.396 1.396-.192.192c-.083.083-.153.175-.21.275l-2.028 2.028c.098.057.19.127.275.21l.192.192 1.396 1.396c.428.428 1.125.428 1.553 0l2.913-2.913Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.446 7.875 3.328 3.328m-3.328-3.328L4.02 15.298c-1.22 1.22-1.22 3.193 0 4.413s3.193 1.22 4.413 0L15.86 12.285m-4.414-4.41L13.172 6.15m-1.726 1.725-3.328-3.328" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.88 10.98-.192-.192c-.083-.083-.175-.153-.275-.21L6.386 8.55c-.44-.44-1.152-.44-1.592 0L3 10.333c-.44.44-.44 1.152 0 1.592l2.028 2.028c.057.098.127.19.21.275l.192.192m-4.242-4.242 3.328 3.328" />
    </svg>
);
const CloseIcon: FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


// ======= CONSTANTS =======
const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Our Team', href: '#team' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
];

const PRACTICE_AREAS = [
    { name: 'Constitutional Law', description: 'Handling complex constitutional issues, judicial reviews, and fundamental rights litigation before High Courts and the Supreme Court.', icon: BuildingLibraryIcon },
    { name: 'Arbitration Law', description: 'Expertise in domestic and international arbitration, mediation, and alternative dispute resolution for swift and effective outcomes.', icon: ScaleIcon },
    { name: 'Taxation Law', description: 'Comprehensive advisory on direct and indirect taxation, representing clients in disputes from the Tribunal to the Supreme Court.', icon: BanknotesIcon },
    { name: 'Labour & Employment Law', description: 'Advising on all aspects of employment law, including contracts, disputes, terminations, and regulatory compliance for businesses.', icon: UsersIcon },
    { name: 'Banking Law', description: 'Specializing in banking regulations, loan agreements, recovery suits, and financial dispute resolution for institutions and individuals.', icon: BriefcaseIcon },
    { name: 'Civil Law', description: 'Resolving property disputes, contract breaches, and succession matters through meticulous litigation and strategic negotiation.', icon: ShieldCheckIcon },
    { name: 'Criminal Law', description: 'Defending clients in a wide range of criminal matters, including bail, trials, and appeals, with a focus on protecting rights.', icon: ShieldCheckIcon },
    { name: 'Corporate Law', description: 'Providing expert guidance on company formation, mergers, acquisitions, and corporate governance to ensure legal compliance.', icon: GlobeAltIcon },
    { name: 'Family Law', description: 'Handling sensitive family matters including divorce, child custody, and guardianship with compassion and legal expertise.', icon: UsersIcon },
];

const WHY_CHOOSE_US_POINTS = [
    { title: 'Decades of Experience', description: 'Our team possesses a wealth of knowledge accumulated over years of successful practice in diverse legal fields.', icon: AcademicCapIcon },
    { title: 'Client-Centric Approach', description: 'We prioritize your needs, offering personalized strategies and maintaining open communication throughout the legal process.', icon: UsersIcon },
    { title: 'Proven Track Record', description: 'Our history of landmark cases and favorable outcomes speaks for itself. We are committed to achieving the best results for our clients.', icon: ShieldCheckIcon },
];

const TEAM_MEMBERS = [
    { name: 'Shk-Hamza', title: 'Website Developer & Designer', bio: 'The creative force behind the design and development of the Zia Associates website, blending modern aesthetics with a seamless user experience.', icon: CodeBracketIcon, isDev: true, link: 'https://github.com/Shk-Hamza' },
    { name: 'Mr. Zia Ur Rehman', title: 'Legal Advisor', bio: 'An Advocate of the High Court and an Ex-Member of the Faisalabad Bar Council, providing expert legal counsel and strategic guidance.', icon: AcademicCapIcon },
    { name: 'Ms. Raina Zia', title: 'Managing Partner', bio: 'As a Chartered Management Accountant and Ex-Deputy Director of the Irrigation Dept, Ms. Zia oversees firm operations with financial and administrative acumen.', icon: BriefcaseIcon },
    { name: 'Muhammad Ahmad', title: 'Admin Manager', bio: 'Responsible for the smooth and efficient administrative operations of the firm, ensuring seamless support for our legal team and clients.', icon: UsersIcon },
    { name: 'M. Abdullah', title: 'Client Relations Officer', bio: 'Dedicated to fostering strong client relationships, ensuring clear communication and exceptional service at every stage of the legal process.', icon: UsersIcon },
];

const PUBLICATIONS = [
    { title: "The Evolving Landscape of Digital Evidence in Pakistani Courts", author: "Mr. Zia Ur Rehman", excerpt: "An analysis of the admissibility and challenges of electronic evidence under the Qanun-e-Shahadat Order, 1984, in the age of technology." },
    { title: "Corporate Governance Reforms: A Step Towards Transparency", author: "Ms. Raina Zia", excerpt: "This article explores the impact of recent SECP regulations on corporate governance practices for public and private limited companies in Pakistan." },
    { title: "Understanding Alternative Dispute Resolution (ADR) in Commercial Litigation", author: "Mr. Zia Ur Rehman", excerpt: "A practical guide to the benefits of arbitration and mediation as effective alternatives to traditional court proceedings for commercial disputes." },
    { title: "Navigating Cross-Border Contracts: Jurisdiction and Enforcement", author: "Ms. Raina Zia", excerpt: "Key legal considerations for Pakistani businesses entering into international contracts, focusing on jurisdiction clauses and enforcement of foreign judgments." }
];

// ======= LAYOUT COMPONENTS =======
interface AnimatedSectionProps extends HTMLProps<HTMLElement> {
    children: React.ReactNode;
    animation?: 'fade-in-up' | 'fade-in-down';
}

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, className = '', animation = 'fade-in-up', ...props }) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
    return (
        <section
            ref={ref}
            className={`transition-opacity duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 ' + (animation === 'fade-in-up' ? 'translate-y-10' : '-translate-y-10')}`}
            {...props}
        >
            {children}
        </section>
    );
};

const SectionHeader: FC<{ title: string; subtitle?: string; id: string }> = ({ title, subtitle, id }) => (
    <div className="text-center mb-12">
        <h2 id={id} className="text-4xl font-bold font-serif text-white">{title}</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        {subtitle && <p className="max-w-3xl mx-auto mt-4 text-brand-slate">{subtitle}</p>}
    </div>
);


// ======= PAGE COMPONENTS =======
const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <a href="#" className="text-2xl font-bold font-serif text-brand-gold">Zia & Associates</a>
                <nav className="hidden md:flex space-x-8 items-center">
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.href} className="text-brand-light font-semibold hover:text-brand-gold transition-colors duration-300">{link.name}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-light focus:outline-none" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-brand-navy">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-brand-light font-semibold hover:text-brand-gold transition-colors duration-300">{link.name}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

const HeroConstellation: FC = () => (
    <svg className="hero-constellation" preserveAspectRatio="xMidYMid slice">
        {/* Simplified world map constellation */}
        <circle cx="20%" cy="30%" r="1" fill="var(--brand-gold)" /><circle cx="25%" cy="40%" r="1.2" fill="var(--brand-gold)" /><circle cx="15%" cy="35%" r="0.8" fill="var(--brand-gold)" /><line x1="20%" y1="30%" x2="25%" y2="40%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="20%" y1="30%" x2="15%" y2="35%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="30%" cy="65%" r="1" fill="var(--brand-gold)" /><circle cx="28%" cy="55%" r="1.1" fill="var(--brand-gold)" /><line x1="25%" y1="40%" x2="28%" y2="55%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="28%" y1="55%" x2="30%" y2="65%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="45%" cy="25%" r="1.3" fill="var(--brand-gold)" /><circle cx="50%" cy="30%" r="0.9" fill="var(--brand-gold)" /><line x1="45%" y1="25%" x2="50%" y2="30%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="50%" cy="50%" r="1.2" fill="var(--brand-gold)" /><circle cx="48%" cy="60%" r="1" fill="var(--brand-gold)" /><line x1="50%" y1="30%" x2="50%" y2="50%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="50%" y1="50%" x2="48%" y2="60%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="65%" cy="35%" r="1.5" fill="var(--brand-gold)" /><circle cx="75%" cy="40%" r="1.1" fill="var(--brand-gold)" /><circle cx="80%" cy="30%" r="0.8" fill="var(--brand-gold)" /><line x1="65%" y1="35%" x2="50%" y2="30%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="65%" y1="35%" x2="75%" y2="40%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="75%" y1="40%" x2="80%" y2="30%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="80%" cy="70%" r="1" fill="var(--brand-gold)" /><circle cx="75%" cy="65%" r="0.9" fill="var(--brand-gold)" /><line x1="80%" y1="70%" x2="75%" y2="65%" stroke="var(--brand-gold)" strokeWidth="0.2" /><line x1="75%" y1="40%" x2="75%" y2="65%" stroke="var(--brand-gold)" strokeWidth="0.2" />
        <circle cx="10%" cy="15%" r="0.5" fill="var(--brand-gold)" /><circle cx="90%" cy="85%" r="0.7" fill="var(--brand-gold)" /><circle cx="5%" cy="80%" r="0.6" fill="var(--brand-gold)" /><circle cx="95%" cy="10%" r="0.9" fill="var(--brand-gold)" /><circle cx="40%" cy="80%" r="0.8" fill="var(--brand-gold)" /><circle cx="60%" cy="10%" r="1.1" fill="var(--brand-gold)" />
    </svg>
);

const Hero: FC = () => (
    <section className="h-screen bg-brand-dark flex items-center justify-center text-center overflow-hidden relative">
        <HeroConstellation />
        <div className="absolute inset-0 z-0 bg-radial-gradient-hero"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-4">Zia & Associates</h1>
            <p className="text-xl md:text-2xl text-brand-light mb-8 max-w-3xl mx-auto animated-gradient-text font-semibold">Your Trusted Legal Partner</p>
            <a href="#contact" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-block interactive-element">Get a Consultation</a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <a href="#about" aria-label="Scroll down"><div className="w-6 h-10 border-2 border-brand-slate rounded-full flex justify-center items-start p-1"><div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce"></div></div></a>
        </div>
    </section>
);

const About: FC = () => (
    <AnimatedSection id="about" aria-labelledby="about-heading" className="py-20 bg-brand-dark relative overflow-hidden" animation="fade-in-up">
        <GavelIcon className="about-background-graphic text-brand-light-navy" />
        <div className="container mx-auto px-6">
            <SectionHeader title="About Our Firm" id="about-heading" />
            <div className="max-w-4xl mx-auto text-lg text-brand-slate leading-relaxed text-center">
                <p className="mb-6">Established with a vision to provide exceptional legal services, Zia & Associates has grown into a leading law firm in Pakistan. We are a team of dedicated and experienced legal professionals committed to upholding the principles of justice and integrity.</p>
                <p>Our firm combines deep industry knowledge with a collaborative approach to deliver innovative and practical solutions for our clients. We handle a wide spectrum of legal matters, from complex corporate litigation to sensitive family law cases, always striving for excellence and client satisfaction.</p>
            </div>
        </div>
    </AnimatedSection>
);

const PracticeAreas: FC = () => (
    <AnimatedSection id="practice-areas" aria-labelledby="practice-areas-heading" className="py-20 bg-brand-navy" animation="fade-in-up">
        <div className="container mx-auto px-6">
            <SectionHeader title="Our Practice Areas" id="practice-areas-heading" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRACTICE_AREAS.map(({ name, description, icon: AreaIcon }) => (
                    <div key={name} className="unified-card bg-brand-light-navy p-8 rounded-lg shadow-lg group">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-6 mx-auto group-hover:scale-110 transition-transform"><AreaIcon className="w-8 h-8 text-brand-gold" /></div>
                        <h3 className="text-2xl font-bold font-serif text-white text-center mb-4">{name}</h3>
                        <p className="text-brand-slate text-center leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const WhyChooseUs: FC = () => (
    <AnimatedSection className="py-20 bg-brand-dark" animation="fade-in-up">
        <div className="container mx-auto px-6">
            <SectionHeader title="Why Choose Us" id="why-choose-us-heading" />
            <div className="grid md:grid-cols-3 gap-10">
                {WHY_CHOOSE_US_POINTS.map(({ title, description, icon: PointIcon }) => (
                    <div key={title} className="unified-card bg-brand-navy p-8 rounded-lg shadow-lg text-center card-with-corners">
                        <PointIcon className="w-10 h-10 text-brand-gold mx-auto mb-6" />
                        <h3 className="text-2xl font-bold font-serif text-white mb-3">{title}</h3>
                        <p className="text-brand-slate leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const OurTeam: FC = () => (
    <AnimatedSection id="team" aria-labelledby="team-heading" className="py-20 bg-brand-navy" animation="fade-in-up">
        <div className="container mx-auto px-6">
            <SectionHeader title="Meet Our Team" id="team-heading" />
            <div className="max-w-7xl mx-auto">
                <div className="team-grid">
                    {TEAM_MEMBERS.map(({ name, title, bio, icon: MemberIcon, isDev, link }) => {
                        const cardContent = (
                            <>
                                {isDev && <div className="dev-badge"><CodeBracketIcon className="w-4 h-4" /><span>DEV</span></div>}
                                <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-brand-gold/10 flex items-center justify-center flex-shrink-0"><MemberIcon className="w-12 h-12 text-brand-gold" /></div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white">{name}</h3>
                                    <p className="text-brand-gold font-semibold mb-2">{title}</p>
                                    <p className="text-brand-slate text-sm">{bio}</p>
                                </div>
                            </>
                        );

                        if (link) {
                            return (
                                <a key={name} href={link} target="_blank" rel="noopener noreferrer" className={`unified-card bg-brand-light-navy text-center p-8 rounded-lg shadow-lg flex flex-col h-full ${isDev ? 'dev-card' : ''}`}>
                                    {cardContent}
                                </a>
                            );
                        }

                        return (
                            <div key={name} className="unified-card bg-brand-light-navy text-center p-8 rounded-lg shadow-lg flex flex-col h-full">
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Publications: FC = () => (
    <AnimatedSection id="publications" aria-labelledby="publications-heading" className="py-20 bg-brand-dark" animation="fade-in-up">
        <div className="container mx-auto px-6">
            <SectionHeader title="Our Publications" id="publications-heading" subtitle="Sharing our expertise and insights on pivotal legal developments and topics." />
            <div className="space-y-8 max-w-4xl mx-auto">
                {PUBLICATIONS.map((pub) => (
                    <div key={pub.title} className="unified-card bg-brand-navy p-6 rounded-lg shadow-lg group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1"><BookOpenIcon className="w-6 h-6 text-brand-gold"/></div>
                            <div>
                                <h3 className="text-xl font-bold font-serif text-white mb-2">{pub.title}</h3>
                                <p className="text-sm font-semibold text-brand-gold mb-3">By {pub.author}</p>
                                <p className="text-brand-slate leading-relaxed">{pub.excerpt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Contact: FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (Math.random() > 0.2) { setStatus('success'); (e.target as HTMLFormElement).reset(); } 
        else { setStatus('error'); }
        setTimeout(() => { if (status !== 'idle') setStatus('idle'); }, 8000);
    };

    return (
        <AnimatedSection id="contact" aria-labelledby="contact-heading" className="py-20 bg-brand-navy" animation="fade-in-up">
            <div className="container mx-auto px-6">
                <SectionHeader title="Get in Touch" id="contact-heading" subtitle="We're here to help. Reach out to us for a consultation." />
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" placeholder="Your Name" required className="w-full bg-brand-light-navy p-4 rounded-lg text-brand-light placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        <input type="email" placeholder="Your Email" required className="w-full bg-brand-light-navy p-4 rounded-lg text-brand-light placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        <input type="text" placeholder="Subject" required className="w-full bg-brand-light-navy p-4 rounded-lg text-brand-light placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        <textarea placeholder="Your Message" rows={5} required className="w-full bg-brand-light-navy p-4 rounded-lg text-brand-light placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold"></textarea>
                        <div className="text-center"><button type="submit" disabled={status === 'submitting'} className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed interactive-element">{status === 'submitting' ? 'Sending...' : 'Send Message'}</button></div>
                    </form>
                    {status === 'success' && 
                        <div className="feedback-message bg-green-500/10 text-green-400">
                            <span>Message sent successfully! We will get back to you shortly.</span>
                            <button onClick={() => setStatus('idle')} aria-label="Dismiss message"><CloseIcon className="w-5 h-5" /></button>
                        </div>
                    }
                    {status === 'error' && 
                        <div className="feedback-message bg-red-500/10 text-red-400">
                            <span>Something went wrong. Please try again.</span>
                            <button onClick={() => setStatus('idle')} aria-label="Dismiss message"><CloseIcon className="w-5 h-5" /></button>
                        </div>
                    }
                </div>
            </div>
        </AnimatedSection>
    );
};

const Footer: FC = () => (
    <footer className="bg-brand-dark border-t border-brand-light-navy py-12">
        <div className="container mx-auto px-6">
            <div className="footer-grid">
                <div>
                    <h3 className="text-2xl font-bold font-serif text-brand-gold mb-4">Zia & Associates</h3>
                    <p className="text-brand-slate max-w-xs pr-4">A premier law firm dedicated to providing exceptional legal services with integrity and professionalism.</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://m.facebook.com/61561952767311/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-slate hover:text-brand-gold transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                        <a href="https://wa.me/923326604324" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-brand-slate hover:text-brand-gold transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-brand-light mb-4">Quick Links</h4>
                    <nav className="footer-links text-brand-slate">
                        {NAV_LINKS.map(link => (<a key={link.name} href={link.href}>{link.name}</a>))}
                    </nav>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-brand-light mb-4">Contact Us</h4>
                    <ul className="text-brand-slate space-y-3">
                        <li className="flex items-start">
                            <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-gold" />
                            <span>Chamber #211, Sufi Barkat Law Chamber, District Courts, Faisalabad, Pakistan</span>
                        </li>
                        <li className="flex items-center">
                            <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-gold" />
                            <a href="tel:+923326604324" className="hover:text-brand-gold transition-colors">0332-6604324</a>
                        </li>
                        <li className="flex items-center">
                            <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-gold" />
                            <a href="mailto:zia.associates@gmail.com" className="hover:text-brand-gold transition-colors">zia.associates@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-sm text-brand-slate">Your trusted legal partner. © {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

const App: FC = () => {
    return (
        <div className="bg-brand-dark font-sans">
            <Header />
            <main>
                <Hero />
                <About />
                <PracticeAreas />
                <WhyChooseUs />
                <OurTeam />
                <Publications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}