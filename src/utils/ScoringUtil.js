export const ScoringUtil = {
    "name": "Verseny neve",
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
                }
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
                }
            ]
        }
    ]
}