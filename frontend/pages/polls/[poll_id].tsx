import { useRouter } from 'next/router';

export default function Poll() {
    const router = useRouter();
    const { poll_id } = router.query;
    return (
        <div>
            <h1>Poll {poll_id}</h1>
        </div>
    );
}
