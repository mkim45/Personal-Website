import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import "./Main.css";

import GitHubIcon from "./GitHub.png";
import LinkedInIcon from "./LinkedInLogo.png";
import HomeLogo from "./Logo.png";

import { firestore } from "../firebase.js";
import { onSnapshot, updateDoc, doc, collection, getDocs, query, orderBy, limit, setDoc } from "firebase/firestore";

const WORK_DURATION = 25 * 60;
const SHORT_BREAK_DURATION = 5 * 60;
const LONG_BREAK_DURATION = 10 * 60;

const ImgNoMargin = styled("img")({
	maxWidth: "100%",
	maxHeight: "100%",
});

const Planner = () => {
	const [timer, setTimer] = useState(WORK_DURATION);
  	const [timerRunning, setTimerRunning] = useState(false);
	const [selectedTimerOption, setSelectedTimerOption] = useState('work');

	const updateTimer = () => {
		switch (selectedTimerOption) {
			case 'work':
				setTimer(WORK_DURATION);
				break;
			case 'shortBreak':
				setTimer(SHORT_BREAK_DURATION);
				break;
			case 'longBreak':
				setTimer(LONG_BREAK_DURATION);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		updateTimer();
	}, [selectedTimerOption]);

	const handleTick = () => {
		if (timer > 0) {
			setTimer((prevTimer) => prevTimer - 1);
		} else {
			setTimerRunning(false);
		}
	};

	useEffect(() => {
		let timerInterval;

		if (timerRunning) {
			timerInterval = setInterval(handleTick, 1000);
		}

		return () => clearInterval(timerInterval);
	}, [timerRunning, timer]);

	const handleTimerToggle = () => {
		setTimerRunning((prevRunning) => !prevRunning);
	};

	const handleTimerOptionChange = (newOption) => {
		setTimerRunning(false);
		setSelectedTimerOption(newOption);
	};

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(2, '0')}\u2009:\u2009${String(remainingSeconds).padStart(2, '0')}`;
	};

	const [mood, setMood] = useState(null);

	const handleMoodSelection = (selectedMood) => {
		setMood(selectedMood);
	};

	const renderMoodButtons = () => {
		const moodOptions = [1, 2, 3, 4, 5];
	
		return (
		  <div style={{ width: "100%" }}>
			{moodOptions.map((option) => (
			  <button
				key={option}
				className={`mood-button ${mood === option ? "selected" : ""}`}
				onClick={() => handleMoodSelection(option)}
				style={{ marginRight: "9px" }}
			  >
				{option}
			  </button>
			))}
		  </div>
		);
	};

	const [lunch, setLunch] = useState(null);

	const handleLunchSelection = (selectedLunch) => {
		setLunch(selectedLunch);
	};

	const renderLunchButtons = () => {
		const lunchOptions = [1, 2, 3, 4, 5];
	
		return (
		  <div style={{ width: "100%" }}>
			{lunchOptions.map((option) => (
			  <button
				key={option}
				className={`mood-button ${lunch === option ? "selected" : ""}`}
				onClick={() => handleLunchSelection(option)}
				style={{ marginRight: "9px" }}
			  >
				{option}
			  </button>
			))}
		  </div>
		);
	};

	const [dinner, setDinner] = useState(null);

	const handleDinnerSelection = (selectedDinner) => {
		setDinner(selectedDinner);
	};

	const renderDinnerButtons = () => {
		const dinnerOptions = [1, 2, 3, 4, 5];
	
		return (
		  <div style={{ width: "100%" }}>
			{dinnerOptions.map((option) => (
			  <button
				key={option}
				className={`mood-button ${dinner === option ? "selected" : ""}`}
				onClick={() => handleDinnerSelection(option)}
				style={{ marginRight: "9px" }}
			  >
				{option}
			  </button>
			))}
		  </div>
		);
	};

	const [sleepHours, setSleepHours] = useState(null);

	const handleSleepSelection = (selectedSleepHours) => {
		setSleepHours(selectedSleepHours);
	};

	const renderSleepButtons = () => {
		const sleepOptions = [3, 4, 5, 6, 7, 8, 9, 10];
	
		return (
		  <div className="button-container">
			{sleepOptions.map((option) => (
			  <button
				key={option}
				className={`sleep-button ${sleepHours === option ? "selected" : ""}`}
				onClick={() => handleSleepSelection(option)}
				style={{ marginRight: "9px" }}
			  >
				{option}
			  </button>
			))}
		  </div>
		);
	};

	const [courseworkHours, setCourseworkHours] = useState(0);
	const [studyingHours, setStudyingHours] = useState(0);
	const [personalWorkHours, setPersonalWorkHours] = useState(0);
	const [breakHours, setBreakHours] = useState(0);
	const [workoutHours, setWorkoutHours] = useState(0);
	const [professionalWorkHours, setProfessionalWorkHours] = useState(0);

	const [highPriorityTasks, setHighPriorityTasks] = useState([
		{ id: 1, label: "", checked: false },
		{ id: 2, label: "", checked: false },
		{ id: 3, label: "", checked: false },
		{ id: 4, label: "", checked: false },
	]);
	const [lowPriorityTasks, setLowPriorityTasks] = useState([
		{ id: 1, label: "", checked: false },
		{ id: 2, label: "", checked: false },
		{ id: 3, label: "", checked: false },
		{ id: 4, label: "", checked: false },
	]);
	const [contactList, setContactList] = useState([
		{ id: 1, label: "", checked: false },
		{ id: 2, label: "", checked: false },
		{ id: 3, label: "", checked: false },
	]);
	const [dailyChecklist, setDailyChecklist] = useState([
		{ id: 1, label: "", checked: false },
		{ id: 2, label: "", checked: false },
		{ id: 3, label: "", checked: false },
		{ id: 4, label: "", checked: false },
		{ id: 5, label: "", checked: false },
		{ id: 6, label: "", checked: false },
		{ id: 7, label: "", checked: false },
		{ id: 8, label: "", checked: false },
		{ id: 9, label: "", checked: false },
	]);

	const ChecklistItem = ({ id, label, checked, onToggle, onUpdateLabel }) => {
		const [isEditing, setIsEditing] = useState(false);
		const [updatedLabel, setUpdatedLabel] = useState(label);
	  
		const handleLabelUpdate = () => {
		  setIsEditing(false);
		  onUpdateLabel(id, updatedLabel);
		};
	  
		return (
		  <div className="checklist-item">
			<input type="checkbox" checked={checked} onChange={onToggle} />
			{isEditing ? (
			  <input
				type="text"
				value={updatedLabel}
				onChange={(e) => setUpdatedLabel(e.target.value)}
				onBlur={handleLabelUpdate}
				autoFocus
			  />
			) : (
			  <label onDoubleClick={() => setIsEditing(true)}>{label}</label>
			)}
		  </div>
		);
	};

	const handleToggle = (list, setList, itemId) => {
		setList((prevList) =>
		  prevList.map((item) =>
			item.id === itemId ? { ...item, checked: !item.checked } : item
		  )
		);
	  };
	  
	const handleLabelUpdate = (list, setList, itemId, updatedLabel) => {
		setList((prevList) =>
		  prevList.map((item) =>
			item.id === itemId ? { ...item, label: updatedLabel } : item
		  )
		);
	}; 

	const [date, setDate] = useState("");
	const [newDatetime, setNewDatetime] = useState(new Date(2000 + 24, 3 - 1, 11));
	const [documentId, setNewDocumentId] = useState(null);

	function YYMMDDToDate(YYMMDD) {
		const year = Number(YYMMDD.slice(0, 2)) + 2000; // Adjust the year if necessary
		const month = Number(YYMMDD.slice(2, 4)) - 1; // Months are zero-based in JavaScript
		const day = Number(YYMMDD.slice(4, 6));
		return new Date(year, month, day);
	}

	function dateToYYMMDD(date) {
		const year = date.getFullYear().toString().slice(-2);
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}${month}${day}`;
	}

	function formatDate(date) {
		const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
		return `${date.toLocaleDateString('en-US', options).replace(/\//g, '-')}`;
	}

	const getDatesCollectionGreatestDocId = async () => {
		const datesCollection = collection(firestore, "dates");
		const querySnapshot = await getDocs(
		  query(datesCollection, orderBy("__name__", "desc"), limit(1))
		);
		const documents = querySnapshot.docs;
		if (documents.length > 0) {
		  const greatestDocId = documents[0].id;
		  return greatestDocId;
		}
		return null;
	};

	const fetchData = async () => {
		const docId = await getDatesCollectionGreatestDocId();
		const datetimeFormat = YYMMDDToDate(docId);
		setDate(formatDate(datetimeFormat));
		setNewDatetime(datetimeFormat);
		setNewDocumentId(docId);

		const datesRef = doc(firestore, "dates", docId);
		const tasksRef = doc(firestore, "tasks", "031224");
	
		const unsubscribeDates = onSnapshot(datesRef, async (docSnapshot) => {
		  if (docSnapshot.exists()) {
			const data = docSnapshot.data();
			const dailyChecklistChecked = data.dailyChecklist;
			setDailyChecklist((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				checked: dailyChecklistChecked.includes(item.id),
			  }))
			);
			const highPriorityTasksChecked = data.highPriorityTasks;
			setHighPriorityTasks((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				checked: highPriorityTasksChecked.includes(item.id),
			  }))
			);
			const lowPriorityTasksChecked = data.lowPriorityTasks;
			setLowPriorityTasks((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				checked: lowPriorityTasksChecked.includes(item.id),
			  }))
			);
			const contactListChecked = data.dailyContactList;
			setContactList((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				checked: contactListChecked.includes(item.id),
			  }))
			);
			const lunchNumber = data.lunch;
			setLunch(lunchNumber);
			const dinnerNumber = data.dinner;
			setDinner(dinnerNumber);
			const moodNumber = data.mood;
			setMood(moodNumber);
			const sleepNumber = data.sleep;
			setSleepHours(sleepNumber);
			const timeBreakdown = data.timeBreakdown;
			setCourseworkHours(timeBreakdown[0]);
			setStudyingHours(timeBreakdown[1]);
			setPersonalWorkHours(timeBreakdown[2]);
			setProfessionalWorkHours(timeBreakdown[3]);
			setBreakHours(timeBreakdown[4]);
			setWorkoutHours(timeBreakdown[5]);
		  }
		});
	
		const unsubscribeTasks = onSnapshot(tasksRef, async (docSnapshot) => {
		  if (docSnapshot.exists()) {
			const data = docSnapshot.data();
			const dailyChecklistLabels = data.dailyChecklist;
			setDailyChecklist((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				label: dailyChecklistLabels[item.id - 1] || item.label,
			  }))
			);
			const highPriorityTasksLabels = data.highPriorityTasks;
			setHighPriorityTasks((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				label: highPriorityTasksLabels[item.id - 1] || item.label,
			  }))
			);
			const lowPriorityTasksLabels = data.lowPriorityTasks;
			setLowPriorityTasks((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				label: lowPriorityTasksLabels[item.id - 1] || item.label,
			  }))
			);
			const dailyContactListLabels = data.dailyContactList;
			setContactList((prevDailyChecklist) =>
			  prevDailyChecklist.map((item) => ({
				...item,
				label: dailyContactListLabels[item.id - 1] || item.label,
			  }))
			);
		  }
		});
	
		return () => {
		  unsubscribeTasks();
		  unsubscribeDates();
		};
	};

	useEffect(() => {
		fetchData();
	}, []);

	const saveData = async () => {
		const datesRef = doc(firestore, "dates", documentId);
		await updateDoc(datesRef, {
		  dailyChecklist: dailyChecklist.filter((item) => item.checked).map((item) => item.id),
		  highPriorityTasks: highPriorityTasks.filter((item) => item.checked).map((item) => item.id),
		  lowPriorityTasks: lowPriorityTasks.filter((item) => item.checked).map((item) => item.id),
		  dailyContactList: contactList.filter((item) => item.checked).map((item) => item.id),
		  lunch,
		  dinner,
		  mood,
		  sleep: sleepHours,
		  timeBreakdown: [
			courseworkHours,
			studyingHours,
			personalWorkHours,
			professionalWorkHours,
			breakHours,
			workoutHours,
		  ],
		});
	
		const tasksRef = doc(firestore, "tasks", "031224"); 
		await updateDoc(tasksRef, {
		  dailyChecklist: dailyChecklist.map((item) => item.label),
		  highPriorityTasks: highPriorityTasks.map((item) => item.label),
		  lowPriorityTasks: lowPriorityTasks.map((item) => item.label),
		  dailyContactList: contactList.map((item) => item.label),
		});
	};

	const handleSubmit = async () => {
		try {
		  await setDoc(doc(firestore, "dates", dateToYYMMDD(new Date(newDatetime.getTime() + 24 * 60 * 60 * 1000))), {
			dailyChecklist: [],
			highPriorityTasks: [],
			lowPriorityTasks: [],
			dailyContactList: [],
			lunch: null,
			dinner: null,
			mood: null,
			sleep: null,
			timeBreakdown: [0, 0, 0, 0, 0, 0], // Array of zeros
			});
	
		  fetchData();
		} catch (error) {
		  console.error("Error creating document: ", error);
		}
	};

    return (
		<div className="view">
			<div 
				style={{
					backgroundColor: "#f0fff1",
					minWidth: "calc(100vw - 40px)",
					minHeight: "calc(100vh - 40px)",
					position: "relative",
					overflow: "hidden"
				}}
			>
				<div
					style={{
						zIndex: 2,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "calc(100vw - 160px)",
						backgroundColor: "#f0fff1",
						padding: "15px 60px 15px",
						position: "fixed"
					}}
				>
					<a href="/">
						<img src={HomeLogo} width={"60px"} alt='Logo' />
					</a>
					<div style={{ display: "flex", flexDirection: "row", width: "35%", justifyContent: "space-between" }}>
						<button
							style={{
								width: "30%",
								height: "40px",
								padding: "8px 16px",
								backgroundColor: "#f0fff1",
								border: "1.5px solid #1b4332",
								color: "black",
								borderRadius: "500px",
								fontSize: "16px",
								fontWeight: "bold",
								cursor: "pointer",
							}}
							onClick={saveData}
							onMouseOver={(e) => {e.target.style.backgroundColor = "#1b4332"; e.target.style.color = "#fff";}}
							onMouseOut={(e) => {e.target.style.backgroundColor = "#f0fff1"; e.target.style.color = "black";}}
						>
							save
						</button>
						<div
							style={{
								fontSize: "24px",
								fontWeight: "bold",
								width: "25%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							{date}
						</div>
						<button
							style={{
								width: "30%",
								height: "40px",
								padding: "8px 16px",
								backgroundColor: "#f0fff1",
								border: "1.5px solid #1b4332",
								color: "black",
								borderRadius: "500px",
								fontSize: "16px",
								fontWeight: "bold",
								cursor: "pointer",
							}}
							onClick={handleSubmit}
							onMouseOver={(e) => {e.target.style.backgroundColor = "#1b4332"; e.target.style.color = "#fff";}}
							onMouseOut={(e) => {e.target.style.backgroundColor = "#f0fff1"; e.target.style.color = "black";}}
						>
							submit
						</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center"
						}}
					>	
						<a href="https://github.com/mkim45" target="_blank" rel="noopener noreferrer" underline="none">
							<ImgNoMargin
								alt="githubtop"
								src={GitHubIcon}
								sx={{ height: "40px", width: "40px", paddingRight: "20px" }}
							/>
						</a>
						<a href="https://www.linkedin.com/in/michael-kim-nu/" target="_blank" rel="noopener noreferrer" underline="none">
							<ImgNoMargin
								alt="linkedintop"
								src={LinkedInIcon}
								sx={{ height: "40px", width: "40px" }}
							/>
						</a>
					</div>
				</div>
				<div 
					style={{ 
						marginLeft: "40px",
						marginRight: "40px"
					}}
				>
					<div className="planner-container">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							<div 
								className="checklist-container"
								style={{
									width: "18%"
								}}
							>
								<h2 style={{ margin: "20px 0px 20px 0px" }}>high priority tasks</h2>
								{highPriorityTasks.map((item) => (
									<ChecklistItem
										key={item.id}
										id={item.id}
										label={item.label}
										checked={item.checked}
										onToggle={() => handleToggle(highPriorityTasks, setHighPriorityTasks, item.id)}
										onUpdateLabel={(itemId, updatedLabel) => handleLabelUpdate(highPriorityTasks, setHighPriorityTasks, itemId, updatedLabel)}
									/>
								))}
							</div>
							<div 
								className="checklist-container"
								style={{
									width: "18%"
								}}
							>
								<h2 style={{ margin: "20px 0px 20px 0px" }}>low priority tasks</h2>
								{lowPriorityTasks.map((item) => (
									<ChecklistItem
										key={item.id}
										id={item.id}
										label={item.label}
										checked={item.checked}
										onToggle={() => handleToggle(lowPriorityTasks, setLowPriorityTasks, item.id)}
										onUpdateLabel={(itemId, updatedLabel) => handleLabelUpdate(lowPriorityTasks, setLowPriorityTasks, itemId, updatedLabel)}
									/>
								))}
							</div>
							<div 
								className="checklist-container"
								style={{
									width: "18%"
								}}
							>
								<h2 style={{ margin: "20px 0px 20px 0px" }}>daily contact list</h2>
								{contactList.map((item) => (
									<ChecklistItem
										key={item.id}
										id={item.id}
										label={item.label}
										checked={item.checked}
										onToggle={() => handleToggle(contactList, setContactList, item.id)}
										onUpdateLabel={(itemId, updatedLabel) => handleLabelUpdate(contactList, setContactList, itemId, updatedLabel)}
									/>
								))}
							</div>
							<div className="timer-container" style={{ width: "40%" }}>
								<div className="timer-display fixed-width" onClick={handleTimerToggle}>{formatTime(timer)}</div>
								<div className="timer-controls">
									<button className={`button ${selectedTimerOption === 'work' ? 'active' : ''}`} onClick={() => { handleTimerOptionChange('work') }}>work</button>
									<button className={`button ${selectedTimerOption === 'shortBreak' ? 'active' : ''}`} onClick={() => { handleTimerOptionChange('shortBreak') }}>short break</button>
									<button className={`button ${selectedTimerOption === 'longBreak' ? 'active' : ''}`} onClick={() => { handleTimerOptionChange('longBreak') }}>long break</button>
								</div>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								width: "100%",
								paddingTop: "2.5px"
							}}
						>
							<div 
								className="checklist-container"
								style={{
									width: "26%"
								}}
							>
								<h2 style={{ margin: "20px 0px 20px 0px" }}>daily checklist</h2>
								{dailyChecklist.map((item) => (
									<ChecklistItem
										key={item.id}
										id={item.id}
										label={item.label}
										checked={item.checked}
										onToggle={() => handleToggle(dailyChecklist, setDailyChecklist, item.id)}
										onUpdateLabel={(itemId, updatedLabel) => handleLabelUpdate(dailyChecklist, setDailyChecklist, itemId, updatedLabel)}
									/>
								))}
							</div>
							<div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
								<div className="mood-sleep-container">
									<h2>mood</h2>
									<div className="mood-container">
										{renderMoodButtons()}
									</div>
								</div>
								<div className="mood-sleep-container">
									<h2>lunch</h2>
									<div className="mood-container">
										{renderLunchButtons()}
									</div>
								</div>
								<div className="mood-sleep-container">
									<h2>dinner</h2>
									<div className="mood-container">
										{renderDinnerButtons()}
									</div>
								</div>
							</div>
							<div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
								<div className="mood-sleep-container">
									<h2>sleep</h2>
									<div className="mood-container">
										{renderSleepButtons()}
									</div>
								</div>
								<div className="mood-sleep-container">
									<h2>time breakdown</h2>
									<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
										<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
											<div className="input-container">
											<label style={{ paddingTop: 0 }}>coursework</label>
											<input
												type="numeric"
												value={courseworkHours}
												onChange={(e) => setCourseworkHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
											<div className="input-container">
											<label>studying</label>
											<input
												type="numeric"
												value={studyingHours}
												onChange={(e) => setStudyingHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
											<div className="input-container">
											<label>personal work</label>
											<input
												type="numeric"
												value={personalWorkHours}
												onChange={(e) => setPersonalWorkHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
										</div>
										<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
											<div className="input-container">
											<label style={{ paddingTop: 0 }}>professional work</label>
											<input
												type="numeric"
												value={professionalWorkHours}
												onChange={(e) => setProfessionalWorkHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
											<div className="input-container">
											<label>break</label>
											<input
												type="numeric"
												value={breakHours}
												onChange={(e) => setBreakHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
											<div className="input-container">
											<label>workout</label>
											<input
												type="numeric"
												value={workoutHours}
												onChange={(e) => setWorkoutHours(Math.max(0, e.target.value))}
												style={{ 
													backgroundColor: "#f0fff1",
													border: "1.5px solid #1b4332", 
													width: "70px", 
													height: "30px", 
													textAlign: "center", 
													fontSize: "16px", 
													fontWeight: "bold",
													borderRadius: "10px"
												}}
											/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Planner;