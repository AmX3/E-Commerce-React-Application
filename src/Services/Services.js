import firestore from "./firebase";

// CRUD - Create Read Update Delete

// Create
export const seedProducts = async () => {
    // Getting Collection Reference instance for the students collection
    const collectionRef = firestore.collection("products");
    // Returns Promise Query Snapshot
    const data = await collectionRef.get();

    if (!data.empty) {
        return;
    }

    // Grabbing every product object in our array and adding it to the product collection
    const promises = data.map(async (product) => {
        return await collectionRef.add(product);
    });

    const resolvedPromises = await Promise.all(promises);
};

// Read - Getting documents in our DB

export const getProducts = async () => {
    // When reading our DB, it will run the function above. If data is empty, it will repopulate with the data
    await seedProducts();
    const collectionRef = firestore.collection("products");
    const queryData = await collectionRef.get();
    // Returns an array of all the documents in the QuerySnapshot
    const documents = queryData.docs;

    // Return an object with all the fields in the doc(apart from id)
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Returning an array of students with their unique IDs
    return data;
};

// Update a single document in our DB

export const updateProducts = async (id, record) => {
    // record = data we want to update our doc with
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

// DELETE - deleting a student in our DB

export const deleteProducts = async (id) => {
    // Getting CollectionRef then DocRef
    const docRef = firestore.collection("products").doc(id);
    // Deleting the Doc refered in the Reference
    await docRef.delete();
};
