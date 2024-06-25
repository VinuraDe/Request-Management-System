const Request = require("../models/request");

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
    console.log('Requests retrieved successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addRequest = async (req, res) => {
  const { requestId, location, service, status, priority, department, requestedBy, assignedTo } = req.body;
  try {
    const newRequest = new Request({ requestId, location, service, status, priority, department, requestedBy, assignedTo });
    const request = await newRequest.save();
    res.json(request);
    console.log('Request added successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const updateRequest = async (req, res) => {
  const { id } = req.params;
  const { requestId, location, service, status, priority, department, requestedBy, assignedTo } = req.body;
  try {
    const updatedRequest = await Request.findByIdAndUpdate(id, { requestId, location, service, status, priority, department, requestedBy, assignedTo }, { new: true });
    res.json(updatedRequest);
    console.log('Request updated successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error....try again');
  }
};

const deleteRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await Request.findByIdAndDelete(id);
    res.json({ msg: 'Request is deleted' });
    console.log('Request deleted successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getRequests,
  addRequest,
  updateRequest,
  deleteRequest
};
