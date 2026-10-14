// destructuring of an object

const course = {
    coursename:"hello",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor} = course;
// same as this
// course.courseInstructor

// now i want to acess iot with a proxy name we can modifgyu the algo as
const {courseInstructor: ins} = course;
// same as course.courseInstruictor'

