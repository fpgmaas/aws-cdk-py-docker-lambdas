# aws-cdk-py-docker-lambdas

This is a project that contains source code required to deploy multiple Lambdas using a single Docker image to AWS using the AWS CDK.

Exact steps to recreate and deploy the project can be found in [this blogpost](https://www.fpgmaas.com/blog/aws-cdk-lambdas-docker)

```log
.
├── README.md
├── cdk
│   ├── README.md
│   ├── bin
│   │   └── cdk-lambda-python.ts
│   ├── lib
│   │   └── cdk-lambda-python-stack.ts
│   ├── cdk.json
│   ├── jest.config.json
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
└── python
    ├── Dockerfile
    ├── README.md
    ├── poetry.lock
    ├── pyproject.toml
    └── src
        ├── __init__.py
        ├── lambda_1
            ├── __init__.py
            └── index.py
        └── lambda_2
            ├── __init__.py
            └── index.py
```