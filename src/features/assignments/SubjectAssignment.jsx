import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../../styles/SubjectAssignment.css";

const allQuestions = {
  1: {
    math: [
      {
        question: "What is 2 + 2?",
        type: "radio",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "Select even numbers",
        type: "checkbox",
        options: ["1", "2", "3", "4"],
        answer: ["2", "4"],
      },
    ],
    english: [
      {
        question: "Which is a vowel?",
        type: "radio",
        options: ["B", "C", "A", "D"],
        answer: "A",
      },
      {
        question: "Select vowels",
        type: "checkbox",
        options: ["A", "B", "E", "G"],
        answer: ["A", "E"],
      },
    ],
    telugu: [
      {
        question: "తెలుగు అక్షరం ఏది?",
        type: "radio",
        options: ["A", "బ", "C", "D"],
        answer: "బ",
      },
    ],
    hindi: [
      {
        question: "हिंदी का स्वर कौन सा है?",
        type: "radio",
        options: ["क", "अ", "ट", "प"],
        answer: "अ",
      },
    ],
    science: [
      {
        question: "What do we need to live?",
        type: "radio",
        options: ["Water", "Chocolate", "TV", "Toys"],
        answer: "Water",
      },
    ],
    social: [
      {
        question: "Our country is called?",
        type: "radio",
        options: ["India", "America", "Africa", "England"],
        answer: "India",
      },
    ],
  },

  // Repeat this structure for classes 2 to 10

  2: {
    math: [
      {
        question: "What is 10 - 3?",
        type: "radio",
        options: ["6", "7", "8", "9"],
        answer: "7",
      },
    ],
    english: [
      {
        question: "Choose a noun:",
        type: "radio",
        options: ["run", "table", "quick", "sleep"],
        answer: "table",
      },
    ],
    telugu: [
      {
        question: "'నువ్వు' పదం ఏ వర్గానికి చెందింది?",
        type: "radio",
        options: ["క్రియ", "సర్వనామం", "విశేషణం", "నామవాచకం"],
        answer: "సర్వనామం",
      },
    ],
    hindi: [
      {
        question: "‘खेलता’ कौन सा शब्द है?",
        type: "radio",
        options: ["क्रिया", "संज्ञा", "विशेषण", "सर्वनाम"],
        answer: "क्रिया",
      },
    ],
    science: [
      {
        question: "Plants need _______ to grow.",
        type: "radio",
        options: ["light", "TV", "plastic", "salt"],
        answer: "light",
      },
    ],
    social: [
      {
        question: "Capital of India is?",
        type: "radio",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi",
      },
    ],
  },

  3: {
    Math: [
      { question: "What is 12 + 15?", answer: "27" },
      { question: "Write the number name of 346", answer: "Three hundred forty-six" }
    ],
    English: [
      { question: "Write a sentence using 'because'", answer: "I went home because it was raining." }
    ],
    Telugu: [
      { question: "తెలుగు పదం: పుస్తకం అంటే ఏమిటి?", answer: "బుక్ (Book)" }
    ],
    Hindi: [
      { question: "हाथी का रंग क्या होता है?", answer: "ग्रे (Grey)" }
    ],
    Science: [
      { question: "Name one domestic animal", answer: "Dog" }
    ],
    Social: [
      { question: "What is the capital of India?", answer: "New Delhi" }
    ]
  },

  4: {
    Math: [
      { question: "Multiply: 12 × 6", answer: "72" },
      { question: "What is half of 100?", answer: "50" }
    ],
    English: [
      { question: "Use 'but' in a sentence", answer: "I was tired but happy." }
    ],
    Telugu: [
      { question: "తెలుగు పదం: నీరు అంటే ఏమిటి?", answer: "వాటర్ (Water)" }
    ],
    Hindi: [
      { question: "गाय क्या खाती है?", answer: "घास (Grass)" }
    ],
    Science: [
      { question: "What do plants need to grow?", answer: "Sunlight, water, and air" }
    ],
    Social: [
      { question: "Name any one Indian state", answer: "Telangana" }
    ]
  },
    
  5: {
    Math: [
      { question: "What is 25 + 17?", options: ["42", "41", "40", "43"], type: "radio", answer: ["42"] },
      { question: "Which is a prime number?", options: ["15", "19", "21", "25"], type: "radio", answer: ["19"] },
      { question: "Select even numbers", options: ["2", "5", "8", "11"], type: "checkbox", answer: ["2", "8"] },
      { question: "12 × 3 = ?", options: ["36", "34", "30", "40"], type: "radio", answer: ["36"] },
      { question: "Which is a square number?", options: ["7", "16", "22", "30"], type: "radio", answer: ["16"] }
    ],
    English: [
      { question: "Pick the noun", options: ["run", "happy", "dog", "blue"], type: "radio", answer: ["dog"] },
      { question: "Which is an adjective?", options: ["fast", "jump", "run", "cat"], type: "radio", answer: ["fast"] },
      { question: "Choose verbs", options: ["eat", "play", "red", "box"], type: "checkbox", answer: ["eat", "play"] },
      { question: "Opposite of 'happy'?", options: ["sad", "good", "funny", "tall"], type: "radio", answer: ["sad"] },
      { question: "Plural of 'child'?", options: ["childs", "children", "childes", "chields"], type: "radio", answer: ["children"] }
    ],
    Telugu: [
      { question: "తెలుగు వర్ణమాలలో మొదటి అక్షరం ఏమిటి?", options: ["అ", "ఆ", "ఇ", "ఉ"], type: "radio", answer: ["అ"] },
      { question: "పదాన్ని గుర్తించండి", options: ["పుస్తకం", "ఆ", "ఇ", "ఎ"], type: "radio", answer: ["పుస్తకం"] },
      { question: "పదజాలం ఎంచుకోండి", options: ["కవి", "రవి", "గవి", "తవి"], type: "checkbox", answer: ["కవి", "రవి"] },
      { question: "సరైన అక్షరం?", options: ["జ", "ఝ", "ఞ", "ట"], type: "radio", answer: ["జ"] },
      { question: "తెలుగు భాషలో ఎన్ని హల్లులు?", options: ["41", "56", "60", "36"], type: "radio", answer: ["41"] }
    ],
    Hindi: [
      { question: "‘घर’ में कौनसा शब्द है?", options: ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"], type: "radio", answer: ["संज्ञा"] },
      { question: "क्रिया चुनें", options: ["खाना", "सुंदर", "लाल", "घर"], type: "radio", answer: ["खाना"] },
      { question: "सही शब्द चुनें", options: ["नदी", "किताब", "लिखना", "खेलना"], type: "checkbox", answer: ["नदी", "किताब"] },
      { question: "‘लाल’ शब्द क्या है?", options: ["संज्ञा", "विशेषण", "क्रिया", "सर्वनाम"], type: "radio", answer: ["विशेषण"] },
      { question: "‘मैं’ कौनसा सर्वनाम है?", options: ["पुरुषवाचक", "निजवाचक", "अन्य", "सर्वनाम"], type: "radio", answer: ["निजवाचक"] }
    ],
    Science: [
      { question: "Which part of plant makes food?", options: ["Leaf", "Root", "Stem", "Flower"], type: "radio", answer: ["Leaf"] },
      { question: "Select living things", options: ["Dog", "Car", "Tree", "Rock"], type: "checkbox", answer: ["Dog", "Tree"] },
      { question: "Sun is a?", options: ["Planet", "Star", "Moon", "Comet"], type: "radio", answer: ["Star"] },
      { question: "Which gas is essential for breathing?", options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], type: "radio", answer: ["Oxygen"] },
      { question: "What causes day and night?", options: ["Earth's rotation", "Sun's movement"], type: "radio", answer: ["Earth's rotation"] }
    ],
    Social: [
      { question: "Capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], type: "radio", answer: ["Delhi"] },
      { question: "Which are continents?", options: ["Asia", "India", "Africa", "Delhi"], type: "checkbox", answer: ["Asia", "Africa"] },
      { question: "Who is the Father of Nation?", options: ["Gandhi", "Nehru", "Bose", "Patel"], type: "radio", answer: ["Gandhi"] },
      { question: "National Animal of India?", options: ["Lion", "Tiger", "Elephant", "Horse"], type: "radio", answer: ["Tiger"] },
      { question: "What is a map?", options: ["Drawing of Earth", "Book", "Photo", "Story"], type: "radio", answer: ["Drawing of Earth"] }
    ]
  },
  6: {
    English: [
      {
        question: "Antonym of 'Brave'?",
        options: ["Coward", "Bold", "Hero", "Strong"],
        answer: "Coward"
      }
    ],
    Math: [
      {
        question: "What is the LCM of 4 and 5?",
        options: ["10", "15", "20", "25"],
        answer: "20"
      }
    ],
    Telugu: [
      {
        question: "'తల్లి' అంటే?",
        options: ["Father", "Mother", "Brother", "Sister"],
        answer: "Mother"
      }
    ],
    Hindi: [
      {
        question: "'जल' का पर्यायवाची शब्द?",
        options: ["नदी", "सागर", "पानी", "तालाब"],
        answer: "पानी"
      }
    ],
    Science: [
      {
        question: "Which gas do plants release during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
      }
    ],
    Social: [
      {
        question: "Who was the first President of India?",
        options: ["Rajendra Prasad", "Nehru", "Gandhi", "Abdul Kalam"],
        answer: "Rajendra Prasad"
      }
    ]
  },
  7: {
    math: [
      {
        question: "What is the value of π (approx)?",
        type: "radio",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: "3.14",
      },
      {
        question: "Select prime numbers",
        type: "checkbox",
        options: ["4", "5", "7", "9"],
        answer: ["5", "7"],
      },
    ],
    english: [
      {
        question: "Identify the adjective",
        type: "radio",
        options: ["run", "beautiful", "apple", "dance"],
        answer: "beautiful",
      },
      {
        question: "Select synonyms for 'happy'",
        type: "checkbox",
        options: ["sad", "joyful", "cheerful", "angry"],
        answer: ["joyful", "cheerful"],
      },
    ],
  },
  8: {
    math: [
      {
        question: "What is the square root of 64?",
        type: "radio",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        question: "Select perfect squares",
        type: "checkbox",
        options: ["4", "8", "9", "15"],
        answer: ["4", "9"],
      },
    ],
    english: [
      {
        question: "Which is an adverb?",
        type: "radio",
        options: ["slow", "slowly", "slower", "slowest"],
        answer: "slowly",
      },
      {
        question: "Select interjections",
        type: "checkbox",
        options: ["Wow", "Hey", "Because", "Run"],
        answer: ["Wow", "Hey"],
      },
    ],
  },
  9: {
    math: [
      {
        question: "What is the value of x in 2x + 3 = 11?",
        type: "radio",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "Select linear equations",
        type: "checkbox",
        options: ["x + 2 = 3", "x² = 4", "2x = 8", "x³ = 27"],
        answer: ["x + 2 = 3", "2x = 8"],
      },
    ],
    english: [
      {
        question: "Choose the correct tense: 'She ___ gone to school.'",
        type: "radio",
        options: ["has", "have", "had", "is"],
        answer: "has",
      },
      {
        question: "Select prepositions",
        type: "checkbox",
        options: ["under", "between", "happy", "sad"],
        answer: ["under", "between"],
      },
    ],
  },
  10: {
    math: [
      {
        question: "What is the derivative of x²?",
        type: "radio",
        options: ["x", "2x", "x²", "1"],
        answer: "2x",
      },
      {
        question: "Select trigonometric functions",
        type: "checkbox",
        options: ["sin", "cos", "tan", "log"],
        answer: ["sin", "cos", "tan"],
      },
    ],
    english: [
      {
        question: "Which is a passive voice sentence?",
        type: "radio",
        options: [
          "She writes a letter.",
          "A letter is written by her.",
          "She is writing a letter.",
          "She has written a letter.",
        ],
        answer: "A letter is written by her.",
      },
      {
        question: "Select modal verbs",
        type: "checkbox",
        options: ["can", "will", "run", "laugh"],
        answer: ["can", "will"],
      },
    ],
  },
};

const SubjectAssignment = () => {
  const { classId, subject } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");
  const isTeacher = role === "teacher";

  const [assignments, setAssignments] = useState([
    "Read Chapter 1",
    "Solve Exercise 2",
    "Write summary on Topic A",
  ]);
  const [newAssignment, setNewAssignment] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [userAnswers, setUserAnswers] = useState({});

  const questions =
    allQuestions[classId]?.[subject?.toLowerCase()] || [];

  const handleAdd = () => {
    const trimmed = newAssignment.trim();
    if (trimmed !== "") {
      setAssignments((prev) => [...prev, trimmed]);
      setNewAssignment("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...assignments];
    updated.splice(index, 1);
    setAssignments(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedText(assignments[index]);
  };

  const handleSaveEdit = () => {
    const trimmed = editedText.trim();
    if (trimmed !== "") {
      const updated = [...assignments];
      updated[editIndex] = trimmed;
      setAssignments(updated);
      setEditIndex(null);
    }
  };

  const handleAnswerChange = (qIndex, value, isMultiple) => {
    setUserAnswers((prev) => {
      const prevAns = prev[qIndex] || (isMultiple ? [] : "");
      if (isMultiple) {
        const updated = prevAns.includes(value)
          ? prevAns.filter((v) => v !== value)
          : [...prevAns, value];
        return { ...prev, [qIndex]: updated };
      } else {
        return { ...prev, [qIndex]: value };
      }
    });
  };

  const isCorrect = (q, i) => {
    if (!userAnswers[i]) return false;
    if (q.type === "radio") return userAnswers[i] === q.answer;
    if (q.type === "checkbox") {
      const a = [...(q.answer || [])].sort();
      const b = [...(userAnswers[i] || [])].sort();
      return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
  };

  return (
    <div className="subject-assignment-container">
      <h2>Assignments for Class {classId} - {subject}</h2>

      <ul className="assignment-list">
        {assignments.map((assignment, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{assignment}</span>
                {isTeacher && (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      {isTeacher && (
        <div className="add-assignment">
          <input
            value={newAssignment}
            onChange={(e) => setNewAssignment(e.target.value)}
            placeholder="New assignment"
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}

      <div className="questions-section">
        <h3>{subject} Questions</h3>
        {questions.length === 0 ? (
          <p>No questions found for this class and subject.</p>
        ) : (
          questions.map((q, i) => (
            <div key={i} className="question-box">
              <p>{i + 1}. {q.question}</p>
              {q.options.map((opt, j) => (
                <label key={j} style={{ display: "block" }}>
                  <input
                    type={q.type}
                    name={`question-${i}`}
                    value={opt}
                    checked={
                      q.type === "radio"
                        ? userAnswers[i] === opt
                        : userAnswers[i]?.includes(opt)
                    }
                    onChange={() =>
                      handleAnswerChange(i, opt, q.type === "checkbox")
                    }
                    disabled={isTeacher}
                  />
                  {opt}
                </label>
              ))}
              {userAnswers[i] && (
                <div className={isCorrect(q, i) ? "correct" : "incorrect"}>
                  {isCorrect(q, i) ? "Correct ✅" : "Incorrect ❌"}
                </div>
              )}
              {isTeacher && (
                <div className="correct-answer">
                  Correct Answer:{" "}
                  {Array.isArray(q.answer)
                    ? q.answer.join(", ")
                    : q.answer}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectAssignment;
