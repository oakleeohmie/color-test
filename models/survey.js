
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Survey = sequelize.define("Survey", {
        // The email cannot be null, and must be a proper email before creation
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        // The password cannot be null
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Survey.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Survey.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
                //Means you can't have a survey without a user
            }
        })
    }
    return Survey;
};
