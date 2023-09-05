'use strict';

module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        doc: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        race: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        gender: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }, {
        tableName: 'pets',
        engine: 'InnoDB',
        charset: 'utf8'
    });
    return Pet
}    
