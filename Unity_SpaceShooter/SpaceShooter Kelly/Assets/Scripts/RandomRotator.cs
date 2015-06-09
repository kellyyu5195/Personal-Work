using UnityEngine;
using System.Collections;

public class RandomRotator : MonoBehaviour {

	public float tumble;
	public Rigidbody rb;

	void Start () {
		rb.angularVelocity = Random.insideUnitSphere * tumble;
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
