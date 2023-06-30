import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Spinner } from './components/Spinner';
import { HomePage } from './pages/Home/HomePage';
import { PlayPage } from './pages/PlayPage/PlayPage';
import { FinishPage } from './pages/FinishPage/FinishPage';
import { Page404 } from './pages/Page404/Page404';
import './App.scss';

function App() {
    const [quizData, setQuizData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [time, setTime] = useState();
    const [infoData, setInfoData] = useState({});
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const loadData = () => {
        const loadedData = JSON.parse(localStorage.getItem('newData'));
        if (loadedData) {
            setInfoData(loadedData);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const onStartQuiz = async (category, diff) => {
        setIsLoading(true);
        navigate(
            `/play/${
                category === 'random' ? 'random' : category.title.toLowerCase()
            }`
        );
        const difficulty = diff === 'random' ? '' : `&difficulty=${diff}`;
        const selectedCategory =
            category === 'random' ? '' : `&category=${category.key}`;
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=10${selectedCategory}&type=multiple${difficulty}`,
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

            if (result.results.length === 0) {
                return navigate('/');
            }
            setQuizData(result);
        } catch (err) {
            navigate('/');
            setError(err.message);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
        setTime(Date.now());
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
                    element={
                        <PlayPage
                            quizData={quizData}
                            score={score}
                            setScore={setScore}
                            correct={correct}
                            setCorrect={setCorrect}
                            setTime={setTime}
                            time={time}
                        />
                    }
                />
                <Route
                    path='/finish'
                    element={
                        <FinishPage
                            score={score}
                            setScore={setScore}
                            correct={correct}
                            setCorrect={setCorrect}
                            time={time}
                            infoData={infoData}
                            setInfoData={setInfoData}
                            quizData={quizData}
                            loadData={loadData}
                            setTime={setTime}
                        />
                    }
                />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
