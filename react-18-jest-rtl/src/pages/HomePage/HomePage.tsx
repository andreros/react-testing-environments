import { Counter } from '@/components/Counter/Counter';
import clsx from 'clsx';
import React from 'react';

export interface IHomePageProps {
    className?: string;
}

const HomePage: React.FC<IHomePageProps> = ({ className }) => {
    const rootClasses = clsx('rsa-home-page', className);

    return (
        <div className={rootClasses}>
            <h1>React Sample App</h1>

            <div className="card">
                <header>
                    <h3>
                        This is a card element from <b>PicniCSS</b>
                    </h3>
                </header>
                <footer>
                    <b>PicniCSS</b> is a lightweight UI library to help you build UI elements fast. For more information, please visit{' '}
                    <a href="https://picnicss.com" target="_blank" rel="noreferrer">
                        https://picnicss.com
                    </a>
                    .
                </footer>
            </div>

            <Counter />
        </div>
    );
};

export default HomePage;
