function str() {
    location.href = "experience.html"

}

function logi() {
    location.href = "Login.html"

}

function back() {
    location.href = "index.html"
}

function back1() {
    location.href = "home.html"
}

function back3() {
    location.href = "home.html";
}

function stop() {
    location.href = "home.html"
}

function beg() {
    location.href = "home.html"
}

function strtworkout() {
    location.href = "workout.html"
}

function exercise() {
    location.href = "exercise.html"
}

function addbtn() {
    location.href = "exercise.html"
}

function profile() {
    location.href = "profile.html"
}









// timer
function startTimer() {
    var seconds = 0;
    var timerElement = document.getElementById("timer");


    setInterval(function () {
        seconds++;
        var formattedTime = formatTime(seconds);
        timerElement.textContent = formattedTime;
    }, 1000);
}



function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return +formattedMinutes + ":" + formattedSeconds;
}

function search_exe() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('elist');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}









function experienceLvl() {
    // stores exeprience level option

    var selectedOption = document.querySelector('input[name="liftingLevel"]:checked');

    if (selectedOption) {
        localStorage.setItem('selectedOption', selectedOption.value);
    }

    location.href = "home.html"



}


// array of all exercises 

const gymExercises = [
  // Beginner level exercises
    {
        exercise: "Push-ups",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest",
        equipment: "Bodyweight"
  },
    {
        exercise: "Chest Press",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest",
        equipment: "Weights"
  },
    {
        exercise: "Dumbbell Curl",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Biceps",
        equipment: "Weights"
  },
    {
        exercise: "Squats",
        level: "beginner",
        sets: 3,
        reps: 12,
        muscle: "Legs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Plank",
        level: "beginner",
        sets: 3,
        reps: 30,
        muscle: "Core",
        equipment: "Bodyweight"
  },
    {
        exercise: "Jumping Jacks",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Full Body",
        equipment: "Bodyweight"
  },
    {
        exercise: "Leg Press",
        level: "beginner",
        sets: 3,
        reps: 12,
        muscle: "Legs",
        equipment: "Weights"
  },
    {
        exercise: "Lat Pulldown",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Back",
        equipment: "Weights"
  },
    {
        exercise: "Tricep Dips",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Triceps",
        equipment: "Bodyweight"
  },
    {
        exercise: "Russian Twists",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Abs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Burpees",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Full Body",
        equipment: "Bodyweight"
  },
    {
        exercise: "Bench Press",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest",
        equipment: "Weights"
  },
    {
        exercise: "Hammer Curls",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Biceps",
        equipment: "Weights"
  },
    {
        exercise: "Lunges",
        level: "beginner",
        sets: 3,
        reps: 12,
        muscle: "Legs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Sit-ups",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Abs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Assisted Pull-ups",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Back",
        equipment: "Weights"
  },
    {
        exercise: "Dumbbell Flyes",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest",
        equipment: "Weights"
  },
    {
        exercise: "Bodyweight Squats",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Legs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Russian Twists",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Abs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Bicep Curls",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Biceps",
        equipment: "Weights"
  },

  // Intermediate level exercises
    {
        exercise: "Mountain Climbers",
        level: "intermediate",
        sets: 4,
        reps: 12,
        muscle: "Core",
        equipment: "Bodyweight"
  },
    {
        exercise: "Lunges",
        level: "intermediate",
        sets: 4,
        reps: 10,
        muscle: "Legs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Burpees",
        level: "intermediate",
        sets: 4,
        reps: 8,
        muscle: "Full Body",
        equipment: "Bodyweight"
  },
    {
        exercise: "Bicycle Crunches",
        level: "intermediate",
        sets: 3,
        reps: 20,
        muscle: "Abs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Pull-ups",
        level: "intermediate",
        sets: 4,
        reps: 8,
        muscle: "Back",
        equipment: "Bodyweight"
  },
    {
        exercise: "Deadlifts",
        level: "intermediate",
        sets: 4,
        reps: 6,
        muscle: "Legs",
        equipment: "Weights"
  },
    {
        exercise: "Shoulder Press",
        level: "intermediate",
        sets: 3,
        reps: 12,
        muscle: "Shoulders",
        equipment: "Weights"
  },
    {
        exercise: "Hamstring Curls",
        level: "intermediate",
        sets: 3,
        reps: 10,
        muscle: "Legs",
        equipment: "Weights"
  },
    {
        exercise: "Cable Flyes",
        level: "intermediate",
        sets: 3,
        reps: 10,
        muscle: "Chest",
        equipment: "Weights"
  },
    {
        exercise: "Plank Rows",
        level: "intermediate",
        sets: 3,
        reps: 12,
        muscle: "Core",
        equipment: "Weights"
  },

  // Advanced level exercises
    {
        exercise: "Handstand Push-ups",
        level: "advanced",
        sets: 4,
        reps: 6,
        muscle: "Shoulders",
        equipment: "Bodyweight"
  },
    {
        exercise: "Pistol Squats",
        level: "advanced",
        sets: 3,
        reps: 8,
        muscle: "Legs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Weighted Pull-ups",
        level: "advanced",
        sets: 5,
        reps: 6,
        muscle: "Back",
        equipment: "Weights"
  },
    {
        exercise: "Barbell Squats",
        level: "advanced",
        sets: 5,
        reps: 5,
        muscle: "Legs",
        equipment: "Weights"
  },
    {
        exercise: "Bench Press",
        level: "advanced",
        sets: 5,
        reps: 8,
        muscle: "Chest",
        equipment: "Weights"
  },
    {
        exercise: "Clean and Jerk",
        level: "advanced",
        sets: 4,
        reps: 6,
        muscle: "Full Body",
        equipment: "Weights"
  },
    {
        exercise: "Dips",
        level: "advanced",
        sets: 4,
        reps: 10,
        muscle: "Triceps",
        equipment: "Bodyweight"
  },
    {
        exercise: "Hanging Leg Raises",
        level: "advanced",
        sets: 3,
        reps: 12,
        muscle: "Abs",
        equipment: "Bodyweight"
  },
    {
        exercise: "Romanian Deadlifts",
        level: "advanced",
        sets: 4,
        reps: 8,
        muscle: "Legs",
        equipment: "Weights"
  },
    {
        exercise: "Inverted Rows",
        level: "advanced",
        sets: 4,
        reps: 8,
        muscle: "Back",
        equipment: "Bodyweight"
  }
];









//gets the stored value 
var exerciseContainer = document.getElementById("exerciseContainer");
var selectedOption = localStorage.getItem('selectedOption');

// fitler the exercises according to exprience level from selected option and stores in new var 
var selectedExercises = [];

for (var i = 0; i < gymExercises.length; i++) {
  if (gymExercises[i].level == selectedOption) {
    selectedExercises.push(gymExercises[i]);
  }
}


// creates the exercise box in html

function createExerciseBox(exercise) {
    var exboxDiv = document.createElement("div");
    exboxDiv.className = "exbox";

    var extxtDiv = document.createElement("div");
    extxtDiv.className = "extxt";

    var icon = document.createElement("div");
    icon.className = "trgticon";
    extxtDiv.appendChild(icon);

    var exerciseDiv = document.createElement("div");
    exerciseDiv.className = "trgttxt";

    var exerciseTitle = document.createElement("h4");
    exerciseTitle.textContent = exercise.exercise;
    exerciseDiv.appendChild(exerciseTitle);

    var exerciseSetsReps = document.createElement("p");
    exerciseSetsReps.textContent = exercise.sets + " sets  " + exercise.reps + " reps";
    exerciseDiv.appendChild(exerciseSetsReps);
    extxtDiv.appendChild(exerciseDiv);
    exboxDiv.appendChild(extxtDiv);

    var optButton = document.createElement("button");
    optButton.className = "optbtn";
    optButton.textContent = "...";
    exboxDiv.appendChild(optButton);

    exerciseContainer.appendChild(exboxDiv);
}


var hour = 6;

// filters the exercise by equipment type
function equipFilter() {
    var selectedOption = document.getElementById("equipment").value;

    // Filters exercises from already selected exercises from exercise level
    var filteredExercises = selectedExercises.filter(function (exercise) {
        if (selectedOption === "all") {
            return true; // Displays all exercises
        } else {
            return exercise.equipment == selectedOption; // Compares the value to selected in dropdown
        }
    });

    exerciseContainer.innerHTML = ''; // Clears the exercise container
    var exerciseCount = 0;

    for (var i = 0; i < filteredExercises.length && exerciseCount < hour; i++) {
        var exercise = filteredExercises[i];
        createExerciseBox(exercise);
        exerciseCount++;
    }

    totalExercises = hour; // Update the exercise count
    var totalExercisesElement = document.querySelector(".ttl h2");
    totalExercisesElement.textContent = totalExercises + " Exercises";
}

function hourCount() {
    var dropdown = document.getElementById("hourCountDropdown");
    hour = parseInt(dropdown.value);
    equipFilter();
}

equipFilter();






//creates popout on clicking + button
function createPopout() {

    const popout = document.createElement('div');
    popout.className = 'exerciselist';


    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search exercises...';
    popout.appendChild(searchInput);

    const exeBox = document.createElement('div');
    exeBox.className = 'exebox';


    const list = document.createElement('ol');
    list.id = 'list';

    for (var i = 0; i < gymExercises.length; i++) {
        var exer = gymExercises[i];
        var listItem = document.createElement('li');
        listItem.className = 'elist';

        var exList = document.createElement('div');
        exList.className = 'exlist';

        var icon = document.createElement('div');
        icon.className = 'trgticon';
        exList.appendChild(icon);

        var exerciseTitle = document.createElement('div');
        exerciseTitle.className = 'trgttxt';
        var title = document.createElement('h4');
        title.textContent = exer.exercise;
        exerciseTitle.appendChild(title);

        exList.appendChild(exerciseTitle);

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "chk";
        checkbox.value = exer.exercise;
        listItem.appendChild(checkbox);

        listItem.appendChild(exList);

        list.appendChild(listItem);
    }

    exeBox.appendChild(list);
    popout.appendChild(exeBox);


    function handleSearchInput() {
        const searchTerm = searchInput.value.toLowerCase();
        const listItems = list.getElementsByTagName('li');


        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];
            const exerciseName = listItem.textContent.toLowerCase();
            if (exerciseName.includes(searchTerm)) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        }
    }


    searchInput.addEventListener('input', handleSearchInput);



    document.body.appendChild(popout);
    var addButton = document.createElement('button');
    addButton.className = 'opbtn';
    addButton.textContent = 'Add Exercise';
    addButton.onclick = function () {
        AddExercise();
        document.body.removeChild(popout);
    };
    popout.appendChild(addButton);


    var addButtonToggle = document.getElementById('adex');
    addButtonToggle.onclick = function () {
        if (popout.style.display === 'none') {
            popout.style.display = 'block';
        } else {
            popout.style.display = 'none';
        }
    };
}









function AddExercise() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        var exerciseName = checkboxes[i].value;
        var exercis = gymExercises.find(exer => exer.exercise == exerciseName);
        createExerciseBox(exercis);
    }


    totalExercises += checkboxes.length;

    var totalExercisesElement = document.querySelector(".ttl h2");
    totalExercisesElement.textContent = totalExercises + " Exercises";




}


function nextExercise() {
    var iframe = document.getElementById('video-frame');
    iframe.src = 'https://www.youtube.com/embed/KjYak5vZO9s';

    var title = document.getElementById('exercise-title');
    title.textContent = 'Dumbbell Bench Press';

    var details = document.getElementById('exercise-details');
    details.textContent = '4 Sets 8 Reps';
}
