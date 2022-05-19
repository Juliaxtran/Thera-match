-- One query

SELECT id from therapists where user_id = $1;

select user_id , users.first_name, users.image, users.about from matches join users ON users.id = matches.user_id where therapist_id = 6;

select  matches.user_id ,
concat(users.first_name,' ', users.last_name)as users_name,
users.image, users.about from matches
join users ON users.id = matches.user_id
join therapists on therapists.user_id= matches.therapist_id
where matches.therapist_id =6 ;


var result = {};
Promise.all([
  connection.queryAsync('SELECT * FROM analysis').then(rows => result.analysis = rows),
  connection.queryAsync('SELECT * FROM analysis_description').then(rows => result.analysis_description = rows)
]).then(function(result){
  console.log(result);
  console.log("result");
}).catch(e => console.error(e));