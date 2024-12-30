export const createUserValidationSchema = {
    username: {
        notEmpty: {
            errorMessage: 'Username is required'
        },
        isLength: {
            options: {
                'min': 3,
                'max': 20
            },
            errorMessage: 'Username must be between 3 and 20 characters long'
        }
    },
    email: {
        notEmpty: {
            errorMessage: 'Email is required'
        },
        isEmail: {
            errorMessage: 'Invalid email format'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'Password is required'
        },
        isLength: {
            options: {
                "min": 8,
                "max": 32,
            }
        },
        errorMessage: 'Password must be between 8 and 32 characters long'
    }
};

export const loginUserValidationSchema = {
    username: {
        notEmpty: {
            errorMessage: 'Username is required'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'Password is required'
        }
    }
};