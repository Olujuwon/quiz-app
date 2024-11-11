import { Link } from 'react-router-dom';
import { SmallBodyText } from './Typography';

const NotFound = () => {
    return (
        <div className={`w-full h-fit bg-transparent p-8 mx-auto text-center`}>
            <SmallBodyText>{'Page not found'}</SmallBodyText>
            <Link to={'/'} className={`text-[color:var(--color-main)] underline italic`}>
                Back to quiz
            </Link>
        </div>
    );
};

export default NotFound;
