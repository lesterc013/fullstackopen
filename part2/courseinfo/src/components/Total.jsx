const Total = ({ course }) => {
    // Filter the course array to only leave the parts
    const initial = 0;
    const total = course.parts.reduce(
        (previousVal, part) => previousVal + part.exercises,
        initial
    );
    return (
        <p>
            <b>total of {total} exercises</b>
        </p>
    );
};

export default Total;
