import React, { Suspense } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import About from './pages/About';
import Accordian from './components/Accordian';
import NestedComments from './components/NestedComments';
import StarRating from './components/StarRating/StartRating';
import OtpComponent from './components/OtpComponent/OtpComponent';
import NestedCheckbox from './components/NestedCheckbox/NestedCheckbox';
import Progressbar from './components/ProgressBar/ProgressBar';
import MemoryGame from './components/MemoryGame/MemoryGame';
const ShimmerUi = React.lazy(() => import("./pages/ShimmerUi"));
const AutoComplete = React.lazy(() => import("./pages/AutoComplete"));
const Home = React.lazy(() => import('./pages/Home'));
const Todo = React.lazy(() => import('./pages/Todo'));
const GptTodos = React.lazy(() => import('./pages/GptTodos'));
const Tabs = React.lazy(() => import('./pages/Tabs'));
const Timer = React.lazy(() => import('./components/Timer'));
const ValidateForm = React.lazy(() => import('./components/DynamicForm'));

const AppRoutes = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/autoComplete" element={<AutoComplete />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todov1" element={<GptTodos />} />
                <Route path="/tabs" element={<Tabs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/accordian" element={<Accordian />} />
                <Route path="/comments" element={<NestedComments />} />
                <Route path="/starRating" element={<StarRating />} />
                <Route path="/otp" element={<OtpComponent />} />
                <Route path="/nestedCheckbox" element={<NestedCheckbox />} />
                <Route path="/progressBar" element={<Progressbar progress={80} />} />
                <Route path="/memoryGame" element={<MemoryGame/>} />
                <Route element={<ProtectedRoute />} >
                    <Route path="/shimmerUi" element={<ShimmerUi />} />
                </Route>

                <Route path="/dynamicForm" element={<ValidateForm />} />
            </Routes>
        </Suspense>

    )
}
export default AppRoutes;
