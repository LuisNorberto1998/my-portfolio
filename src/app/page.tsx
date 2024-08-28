import Projects from '@/components/Projects/Projects';
import Home from '../components/Home/Home';
import Technologies from '../components/Technologies/Technologies';
import Social from '@/components/Social/Social';

export default function Page() {
    return (
        <>
            <Home></Home>
            <Technologies></Technologies>
            <Projects></Projects>
            <Social></Social>
        </>
    );
}
