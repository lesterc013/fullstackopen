const Course = ({ course }) => {
    const initial = 0;
    const total = course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises,
        initial
    );
    return (
        <>
            <h2>{course.name}</h2>
            {course.parts.map((part) => (
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            ))}
            <p>
                <b>total of {total} exercises</b>
            </p>
        </>
    );
};

export default Course;
