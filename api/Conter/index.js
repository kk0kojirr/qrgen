let azure = require('azure-storage');
const cn = process.env.AZURE_STORAGE_CONNECTION_STRING;
const tableSvc = azure.createTableService(cn);

let updatedTask = {
    PartitionKey: {'_':'count'},
    RowKey: {'_': '1'},
    description: {'_':'update task'},
    count: {'_': 0}
};

module.exports = function (context, req) {
    //
    tableSvc.retrieveEntity('count', 'count', '1', (error, result, response) => {
        if(!error){
            const count = result.count._ + 1;
            updatedTask.count._ = count;

            console.log(count);
            
            tableSvc.replaceEntity('count', updatedTask, (error, result, response) => {
                if(!error) {
                    // Entity updated
                    // result contains the entity
                    const responseMessage = count;
                    context.res = {
                        status: 202,
                        body: {
                            count: responseMessage
                        }
                    };
                    context.done();
                } else {
                    console.log(error);
                    context.res = {
                        status: 500,
                        body: {
                            error: error
                        }
                    }
                    context.done();
                }
            });
        } else {
            context.res = {
                status: 400,
                body: "Please pass an item in the request body"
            };
            context.done();
        }
    });
}
