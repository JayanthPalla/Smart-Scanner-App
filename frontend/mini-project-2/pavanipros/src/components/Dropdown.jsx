// import React, { useState } from 'react';
// import './dropdown.css'; // Assuming you have a CSS file named GetStartedPage.css for styling
// import { useNavigate } from 'react-router-dom';

// const Dropdown = () => {
//     let scan = useNavigate();
//     function handleScan() {
//         scan("/fully_scanned");
//     }

//     const [year, setYear] = useState('');
//     const [semester, setSemester] = useState('');
//     const [branch, setBranch] = useState('');
//     const [subject, setSubject] = useState('');

//     const handleYearChange = (event) => {
//         setYear(event.target.value);
//         // Reset semester, branch, and subject when year changes
//         setSemester('');
//         setBranch('');
//         setSubject('');
//     };

//     const handleSemesterChange = (event) => {
//         setSemester(event.target.value);
//         // Reset subject when semester changes
//         setSubject('');
//     };

//     return (
//         <div className="dropdown-container">
//             <label htmlFor="year" className="year" style={{ color: 'white' }}>Year:</label>
//             <select id="year" value={year} onChange={handleYearChange} className="white-text">
//                 <option value="">Select Year</option>
//                 <option value="PUC">PUC</option>
//                 <option value="B.Tech">B.Tech</option>
//             </select>

//             {year === 'PUC' && (
//                 <>
//                     <label htmlFor="puc-year" className="puc-year" style={{ color: 'white' }}>PUC Year:</label>
//                     <select id="puc-year" value={semester} onChange={handleSemesterChange} className="white-text">
//                         <option value="">Select PUC Year</option>
//                         <option value="PUC 1">PUC 1</option>
//                         <option value="PUC 2">PUC 2</option>
//                     </select>
//                 </>
//             )}

//             {year === 'B.Tech' && (
//                 <>
//                     <label htmlFor="branch" className="branch" style={{ color: 'white' }}>Branch:</label>
//                     <select id="branch" value={branch} onChange={(event) => setBranch(event.target.value)} className="white-text">
//                         <option value="">Select Branch</option>
//                         <option value="CSE">Computer Science</option>
//                         <option value="ECE">Electronics and Communication</option>
//                         <option value="CHE">Chemical Engineering</option>
//                         <option value="MME">Electronics and Communication</option>
//                         <option value="CIVIL">Civil Engineering</option>
//                         <option value="EEE">EEE</option>
//                         <option value="ME">Mechanical Engineering</option>
//                         {/* Add other branches as needed */}
//                     </select>

//                     <label htmlFor="semester" className="sem" style={{ color: 'white' }}>Semester:</label>
//                     <select id="semester" value={semester} onChange={handleSemesterChange} className="white-text">
//                         <option value="">Select Semester</option>
//                         <option value="Semester 1">Semester 1</option>
//                         <option value="Semester 2">Semester 2</option>
//                     </select>
//                 </>
//             )}

//             {year && semester && (
//                 <>
//                     <label htmlFor="subject" className="subject" style={{ color: 'white' }}>Subject:</label>
//                     <select id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} className="white-text">
//                         <option value="">Select Subject</option>
//                         {/* Add subjects based on year and semester */}
//                     </select>
//                 </>
//             )}
//             <button type="button" className="scan" onClick={handleScan}>Scan</button>
//         </div>
//     );
// };

// export default Dropdown;


import React, { useState } from 'react';
import axios from 'axios';
import './dropdown.css'; // Assuming you have a CSS file named GetStartedPage.css for styling
import { useNavigate } from 'react-router-dom';


const Dropdown = () => {
    let scan = useNavigate();
    function handleScan() {
        axios.post('/genex/', {course: course, year: year, semester: semester, branch: branch, mid: mid, subject: subject}).then((res)=>{
            console.log(res);

            axios.post('/load_excel/', {course: course, year: year, semester: semester, branch: branch, mid: mid, subject: subject}).then((res2)=>{
                console.log(res2);
            }).catch((e)=>{
                console.log(e);
            });

            console.log("HEllo NaMaste");

            scan("/fully_scanned");

        }).catch((e)=>{
            console.log(e);
        });
    }

    const [course, setCourse] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [branch, setBranch] = useState('');
    const [mid, setMid] = useState('');
    const [subject, setSubject] = useState('');


    const handleCourseChange = (event) => {
        setCourse(event.target.value);
        // Reset semester, branch, and subject when year changes
        setYear('');
        setSemester('');
        setBranch('');
        setSubject('');
        setMid('');
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
        // Reset semester, branch, and subject when year changes
        setSubject('');
        setMid('');
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const handleMidChange = (event) => {
        setMid(event.target.value);
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="year" className="year" style={{ color: 'white' }}>Course:</label>
            <select id="year" value={course} onChange={handleCourseChange} className="white-text">
                <option value="">Select Course</option>
                <option value="PUC">PUC</option>
                <option value="B.Tech">B.Tech</option>
            </select>

            {course === 'PUC' && (
                <>
                    <label htmlFor="puc-year" className="puc-year" style={{ color: 'white' }}>PUC Year:</label>
                    <select id="puc-year" value={year} onChange={handleYearChange} className="white-text">
                        <option value="">Select PUC Year</option>
                        <option value="PUC 1">PUC 1</option>
                        <option value="PUC 2">PUC 2</option>
                    </select>

                    <label htmlFor="semester" className="sem" style={{ color: 'white' }}>Semester:</label>
                    <select id="semester" value={semester} onChange={handleSemesterChange} className="white-text">
                        <option value="">Select Semester</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                    </select>
                </>
            )}

            {course === 'B.Tech' && (
                <>
                    <label htmlFor="branch" className="branch" style={{ color: 'white' }}>Branch:</label>
                    <select id="branch" value={branch} onChange={(event) => setBranch(event.target.value)} className="white-text">
                        <option value="">Select Branch</option>
                        <option value="CSE">Computer Science</option>
                        <option value="ECE">Electronics and Communication</option>
                        <option value="CHE">Chemical Engineering</option>
                        <option value="MME">Metallurgical and Materials Engineering</option>
                        <option value="CE">Civil Engineering</option>
                        <option value="EEE">Electrical and Electronics Engineering</option>
                        <option value="ME">Mechanical Engineering</option>
                    </select>

                    <label htmlFor="btech-year" className="btech-year" style={{ color: 'white' }}>BTech Year:</label>
                    <select id="btech-year" value={year} onChange={handleYearChange} className="white-text">
                        <option value="">Select BTech Year</option>
                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E3">E3</option>
                        <option value="E4">E4</option>
                    </select>

                    <label htmlFor="semester" className="sem" style={{ color: 'white' }}>Semester:</label>
                    <select id="semester" value={semester} onChange={handleSemesterChange} className="white-text">
                        <option value="">Select Semester</option>
                        <option value="S1">Semester 1</option>
                        <option value="S2">Semester 2</option>
                    </select>
                </>
            )}

            {course && year && semester && (
                <>
                    <label htmlFor="mid" className="sem" style={{ color: 'white' }}>Semester:</label>
                    <select id="semester" value={mid} onChange={handleMidChange} className="white-text">
                        <option value="">Select Mid</option>
                        <option value="MID-1">Mid 1</option>
                        <option value="MID-2">Mid 2</option>
                        <option value="MID-3">Mid 3</option>
                    </select>

                    <label htmlFor="subject" className="subject" style={{ color: 'white' }}>Subject:</label>
                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        className="white-text"
                        placeholder="Type Subject Name"
                    />
                </>
            )}

            <button type="button" className="scan" onClick={handleScan}>Scan</button>
        </div>
    );
};

export default Dropdown;