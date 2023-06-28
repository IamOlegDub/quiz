import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { Page404 } from './pages/Page404/Page404';
import { PlayPage } from './pages/PlayPage/PlayPage';
import { FinishPage } from './pages/FinishPage/FinishPage';
import { useState } from 'react';
import { Spinner } from './components/Spinner';

function App() {
    const [quizData, setQuizData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onStartQuiz = async (diff, category) => {
        setIsLoading(true);
        navigate(`/play/${category.title.toLowerCase()}`);
        const difficulty = diff === 'random' ? '' : `&difficulty=${diff}`;

        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=10&category=${category.key}&type=multiple${difficulty}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            // console.log('result is: ', JSON.stringify(result, null, 4));

            setQuizData(result);
        } catch (err) {
            setError(err.message);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Spinner />;
    return (
        <div className='App'>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage onStartQuiz={onStartQuiz} />}
                />
                <Route
                    path='/play/:id'
                    element={<PlayPage quizData={quizData} />}
                />
                <Route path='/finish' element={<FinishPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
