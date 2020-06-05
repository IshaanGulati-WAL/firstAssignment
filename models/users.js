const Model = require('./index');
const bcrypt = require('bcrypt');
const passwordHash = require('password-hash');

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    //   hash=async(pass)=>{
    //     await bcrypt.hash(pass, 10, function (err, hash) {
    //         // Store hash in your password DB.
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log(hash)
    //             return hash;
    //             // console.log(hash)
    //             // pass = hash
    //             // console.log(this.password)
    //             // this.password=hash
    //             // // this.password = hash

    //         }

    //     });
    // }
    async $beforeInsert() {
        // let pass = null;
        // console.log(this.password)

        // let pass=this.password
        // let ans=null
        // this.password = passwordHash.generate(this.password);
        // console.log(await this.hash(this.password))
        //    await bcrypt.genSalt(10,async function(err, salt) {
        //        await bcrypt.hash(pass, salt,async function(err, hash) {
        //             // Store hash in your password DB.
        //             console.log(hash)
        //             console.log(this+" "+40)
        //             ans=await hash;
        //             this.password=hash
        //         });
        //     });
        // console.log(ans)
        // this.password=await this.hash(this.password);
         bcrypt.hash(this.password, 10, function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                // console.log(err)
            }
            else {
                // console.log(hash)
                // pass = hash
                console.log(this.password)
                this.password=hash
                // this.password = hash

            }

        });
        // this.password = bcrypt.hashSync(this.password, process.env.SALT_ROUNDS);
        // console.log(pass)
        // this.pass

        // console.log(this.password)
    }
    static get relationMappings() {
        const Courses = require('./courses');
        const UserCourses = require('./userCourses');
        const WatchedVideos = require('./watchedVideos');
        const Videos = require('./videos');

        return {
            courses: {
                relation: Model.ManyToManyRelation,
                modelClass: Courses,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'userCourses.userId',
                        to: 'userCourses.courseId',
                    },
                    to: 'courses.id'
                }
            },
            // userCourses: {
            //     relation: Model.HasManyRelation,
            //     modelClass: UserCourses,
            //     join: {
            //         from: 'users.id',
            //         to: 'userCourses.userId'
            //     }
            // },
            watchedVideos: {
                relation: Model.ManyToManyRelation,
                modelClass: Videos,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'watchedVideos.userId',
                        to: 'watchedVideos.videoId',
                    },
                    to: 'videos.id'
                }
            }
        };
    }
}

module.exports = Users;