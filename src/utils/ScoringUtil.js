export const ScoringUtil = {
    "name": "Name of competition",
    "tasks": [
        {
            "name": "1. task",
            "aspects": [
                {
                    "id": 11,
                    "name": "1. aspect",
                    "type": "list",
                    "values": {
                        "good": 'Good',
                        "decent": 'Decent',
                        "bad": 'Bad'
                    },
                    "required": true
                },
                {
                    "id": 12,
                    "name": "2. aspect",
                    "description": "2. aspect's description",
                    "type": "number",
                    "maxValue": 5,
                    "required": true
                },
                {
                    "id": 13,
                    "name": "3. aspect",
                    "description": "3. aspect's description",
                    "type": "number",
                    "maxValue": 4,
                    "required": true
                },
                {
                    "id": 14,
                    "name": "4. aspect",
                    "description": "4. aspect's description",
                    "type": "number",
                    "maxValue": 9,
                    "required": true
                },
            ]
        },
        {
            "name": "2. task",
            "aspects": [
                {
                    "id": 21,
                    "name": "1. aspect",
                    "description": "1. aspect's description",
                    "type": "number",
                    "maxValue": 5,
                    "required": true
                },
                {
                    "id": 22,
                    "name": "2. aspect",
                    "description": "2. aspect's description",
                    "type": "number",
                    "maxValue": 4,
                    "required": true
                },
                {
                    "id": 23,
                    "name": "3. aspect",
                    "description": "3. aspect's description",
                    "type": "number",
                    "maxValue": 6,
                    "required": true
                },
                {
                    "id": 24,
                    "name": "4. aspect",
                    "description": "4. aspect's description",
                    "type": "number",
                    "maxValue": 4,
                    "required": false
                }
            ]
        },
        {
            "name": "3. task",
            "aspects": [
                {
                    "id": 31,
                    "name": "1. aspect",
                    "type": "boolean",
                    "value": 1
                },
                {
                    "id": 32,
                    "name": "2. aspect",
                    "type": "boolean",
                    "value": 1,
                    "required": true
                },
                {
                    "id": 33,
                    "name": "3. aspect",
                    "description": "3. aspect's description",
                    "type": "number",
                    "maxValue": 4,
                    "required": false
                }
            ]
        }
    ]
}